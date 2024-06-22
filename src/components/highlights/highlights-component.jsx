"use client";
import React from "react";
import {
  HighlightsContainer,
  HighlightsContent,
  HighlightsLinksContainer,
  HighlightsTitle,
} from "./highlights-styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { rightImg, watchImg } from "@/utils";
import VideoCarousel from "../video-carousel/video-carousel-component";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
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
            <p className='link'>
              Watch the film
              <Image src={watchImg} alt='watch' className='ml-2' />
            </p>

            <p className='link'>
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
