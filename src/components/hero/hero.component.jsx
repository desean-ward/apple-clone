"use client";
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import {
  HeroCallToAction,
  HeroContainer,
  HeroContent,
  VideoContainer,
} from "./hero.styles";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { heroVideo, smallHeroVideo } from "../../utils";

const Hero = () => {
  // Get the width of the window to determine which video to load
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 700 ? smallHeroVideo : heroVideo
  );

  // Set the video source based on the window width
  const handleVideoSrcSet = () => {
    window.innerWidth < 760
      ? setVideoSrc(smallHeroVideo)
      : setVideoSrc(heroVideo);
  };

  // Set the video source on window resize
  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleVideoSrcSet);

    // Clean Up
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    {/* Hero Animation Code */}
    gsap.to("#hero", { opacity: 1, delay: 2 });

    {/* Call to Action Animation Code */}
    gsap.to("#cta", { opacity: 1, y: -75, delay: 2 });
  }, []);

  return (
    <HeroContainer>
      <HeroContent>
        {/* Hero Title */}
        <p id='hero' className='hero-title'>
          iPhone 15 Pro
        </p>

        {/* Video Container */}
        <VideoContainer>
          <video
            className='pointer-events-none'
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </VideoContainer>
      </HeroContent>

      {/* Call to Action Button */}
      <HeroCallToAction id='cta'>
        <a href='highlights' className='btn'>
          Buy
        </a>

        <p className='text-xl font-normal'>From $199/month or $999</p>
      </HeroCallToAction>
    </HeroContainer>
  );
};

export default Hero;

