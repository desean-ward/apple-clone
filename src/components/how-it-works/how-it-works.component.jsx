import React, { useEffect, useRef } from "react";
import {
  ChipImageContainer,
  HeaderContainer,
  HowItWorksContainer,
  HowItWorksWrapper,
  VideoContainer,
  VideoWrapper,
} from "./how-it-works.styles";
import Image from "next/image";
import { chipImg, frameImg, frameVideo } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "@/utils/animations";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    // Scroll trigger for the chip image
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    const video = videoRef.current;

    gsap.to(video, {
      scrollTrigger: {
        trigger: video,
        start: "top 90%", // Adjust as needed
        onEnter: () => video.play(), // Play the video on entering the viewport
      },
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  // useEffect(() => {
  //   const video = videoRef.current;

  //   // Create the GSAP animation with ScrollTrigger
  //   gsap.to(video, {
  //     scrollTrigger: {
  //       trigger: video,
  //       start: "top center", // Adjust as needed
  //       onEnter: () => video.play(), // Play the video on entering the viewport
  //       onLeave: () => video.pause(), // Optional: Pause the video on leaving the viewport
  //       onEnterBack: () => video.play(), // Play the video again when scrolling back up
  //       onLeaveBack: () => video.pause(), // Optional: Pause the video on scrolling back up
  //     },
  //   });

  //   // Clean up the ScrollTrigger on component unmount
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <HowItWorksContainer className='common-padding'>
      <HowItWorksWrapper>
        <ChipImageContainer id='chip'>
          <Image src={chipImg} alt='chip' width={180} height={180} />
        </ChipImageContainer>

        <HeaderContainer>
          <h2 className='hiw-title'>
            A17 Pro chip.
            <br />A monster win for gaming.
          </h2>

          <p className='hiw-subtitle'>
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </HeaderContainer>

        <VideoContainer>
          <VideoWrapper>
            <div className='overflow-hidden'>
              <Image
                src={frameImg}
                alt='frame'
                className='bg-transparent relative z-10'
              />
            </div>
            <div className='hiw-video'>
              <video
                id='video'
                className='pointer-events-none'
                playsInline
                preload='auto'
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type='video/mp4' />
              </video>
            </div>
          </VideoWrapper>

          <p className='text-gray font-semibold text-center mt-3'>
            Honkai: Star Rail
          </p>
        </VideoContainer>

        <div className='hiw-text-container flex justify-center'>
          <div className='flex w-[326px] justify-center flex-col'>
            <p className='hiw-text g_fadeIn mb-4'>
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className='text-white'>
                best graphic performance by far.
              </span>
            </p>

            <p className='hiw-text g_fadeIn'>
              Mobile{" "}
              <span className='text-white'>
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters. And with
              industry-leading speed and efficiency, A17 Pro takes fast and runs
              with it.
            </p>
          </div>

          <div className='flex justify-center flex-col g_fadeIn mt-[-5rem] md:mt-0'>
            <p className='hiw-text'>New</p>
            <p className='hiw-bigtext'>Pro-class GPU</p>
            <p className='hiw-text'>with 6 cores</p>
          </div>
        </div>
      </HowItWorksWrapper>
    </HowItWorksContainer>
  );
};

export default HowItWorks;
