import React, { useEffect, useRef, useState } from "react";

import {
  CarouselText,
  Slider,
  VideoCarouselWrapper,
  VideoContainer,
  VideoWrapper,
} from "./video-carousel.styles";
import { hightlightsSlides } from "../../constants";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { pauseImg, playImg, replayImg } from "@/utils";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  // Video Refs
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  // Video State
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  // Video Controls
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  // Handles the animation of the carousel videos
  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
        start: "top bottom",
        // markers: true,
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  // Handles the video loading, this will trigger the useEffect to auto-start the video
  const handleLoadedMetadata = (i, e) => setLoadedData((pre) => [...pre, e]);

  // Deals with the video playing is data is loaded
  useEffect(() => {
    if (loadedData.length > 3) {
      // If startPlay is true, pause the video
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        // If we're playing, start the video
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  // Keeps track of the loaded data
  useEffect(() => {
    // Set Current Progress
    let currentProgress = 0;

    // Get the current video element
    const span = videoSpanRef.current;

    if (span[videoId]) {
      // animate the progress of the video
      const anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            // Handels the width of the progress bar
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw" //phone
                  : window.innerWidth < 1200
                    ? "10vw" // tablet
                    : "4vw", // laptop
            });

            // Handles the animation of the width of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      // update the progress bar
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  // Handles the state of the play button
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  return (
    <>
      <VideoCarouselWrapper>
        {hightlightsSlides.map((list, i) => (
          // Video Slider
          <Slider key={list.id} id="slider">
            <VideoWrapper className="video-carousel_container">
              {/* Video Player */}
              <VideoContainer>
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  className={`${
                    list.id === 2 && "translate-x-44"
                  } pointer-events-none`}
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </VideoContainer>

              {/* Video Caption */}
              <CarouselText>
                {list.textLists.map((text) => (
                  <p key={text} className="text-xl font-medium md:text-2xl">
                    {text}
                  </p>
                ))}
              </CarouselText>
            </VideoWrapper>
          </Slider>
        ))}
      </VideoCarouselWrapper>

      <div id="buttons" className="relative mt-10 flex-center">
        <div
          id="btn-container"
          className="py-5 bg-gray-300 rounded-full flex-center px-7 backdrop-blur"
        >
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="relative mx-2 size-3 cursor-pointer  rounded-full bg-[#afafaf]"
            >
              <span
                ref={(el) => (videoSpanRef.current[i] = el)}
                className="rounded-full size-full"
              />
            </span>
          ))}
        </div>

        <button id="play-btn" className="control-btn">
          <Image
            src={isLastVideo ? replayImg : isPlaying ? pauseImg : playImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "pause" : "play"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                  ? () => handleProcess("play")
                  : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
