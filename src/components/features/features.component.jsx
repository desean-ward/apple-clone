/* eslint-disable react/no-unescaped-entities */
/* eslint-disable tailwindcss/no-custom-classname */
import React, { useRef } from "react";
import {
  ContentContainer,
  ContentHeader,
  FeatureImage,
  FeaturesContainer,
  FeaturesContent,
  ImagesContainer,
  SectionHeaderContainer,
  VideoAndImagesContainer,
  VideoContainer,
} from "./features.styles";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "@/utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "@/utils";
import Image from "next/image";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },

      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });

    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
        duration: 1,
      },
      { scrup: 5.5 }
    );

    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <FeaturesContainer className="common-padding">
      <FeaturesContent>
        <ContentContainer>
          <SectionHeaderContainer>
            <h1 id="features_title" className="section-heading">
              Explore the full story.
            </h1>
          </SectionHeaderContainer>
          <ContentHeader>
            <h2 className="text-5xl font-semibold sm:text-7xl">iPhone.</h2>

            <h2 className="text-5xl font-semibold sm:text-7xl">
              Forged in titanium.
            </h2>
          </ContentHeader>

          <VideoAndImagesContainer>
            <VideoContainer>
              <video
                playsInline
                id="exploreVideo"
                className="size-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </VideoContainer>

            <ImagesContainer>
              <div className="feature-video-container">
                {/* Image 1 */}
                <FeatureImage>
                  <Image
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </FeatureImage>

                {/* Image 2 */}
                <FeatureImage>
                  <Image
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-video g_grow"
                  />
                </FeatureImage>
              </div>
            </ImagesContainer>

            <div className="feature-text-container">
              <div className="flex-center flex-1">
                <p className="feature-text g_text">
                  iPhone 15 Pro is{" "}
                  <span className="text-white">
                    the first iPhone to feature an aerospace-grade titanium
                    design
                  </span>
                  , using the same alloy tha spacecrafts use for missions to
                  Mars.
                </p>
              </div>

              <div className="flex-center flex-1">
                <p className="feature-text g_text">
                  Titanium has one of the best strength-to-weight ratios of any
                  metal, making these our{" "}
                  <span className="text-white">lightest pro models ever. </span>
                  You'll notice the difference the moment you pick one up.
                </p>
              </div>
            </div>
          </VideoAndImagesContainer>
        </ContentContainer>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default Features;
