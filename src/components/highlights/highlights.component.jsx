"use client";
import React from "react";
import {
  HighlightsContainer,
  HighlightsContent,
  HighlightsLinksContainer,
  HighlightsTitle,
} from "./highlights.styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { rightImg, watchImg } from "@/utils";
import VideoCarousel from "../video-carousel/video-carousel.component";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#highlights",
        toggleActions: "restart none none reverse",
        start: "top 66.3%",
        // markers: true,
      },
    });

    gsap.to("#link1", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#link1",
        toggleActions: "restart none none reverse",
        start: "top 75%",
        // markers: true,
      },
    });

    gsap.to("#link2", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: "#link2",
        toggleActions: "restart none none reverse",
        start: "top 65%",
        // markers: true,
      },
    });
  }, []);

  return (
    <HighlightsContainer id='highlights'>
      <HighlightsContent>
        {/* Title */}
        <HighlightsTitle>
          <h1 id='title' className='section-heading'>
            Get the highlights.
          </h1>

          {/* Links */}
          <HighlightsLinksContainer>
            <p id='link1' className='link'>
              Watch the film
              <Image src={watchImg} alt='watch' className='ml-2' />
            </p>

            <p id='link2' className='link'>
              Watch the event
              <Image src={rightImg} alt='right' className='ml-2' />
            </p>
          </HighlightsLinksContainer>
        </HighlightsTitle>

        {/* Video Carousel */}
        <VideoCarousel />
      </HighlightsContent>
    </HighlightsContainer>
  );
};

export default Highlights;
