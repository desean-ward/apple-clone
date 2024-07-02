"use client";
import React, { useRef, useState, useEffect } from "react";

import {
  ModelContainer,
  ModelContent,
  ModelImageContainer,
  ModelImageWrapper,
} from "./model.styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";
import { yellowImg } from "@/utils";
import { models, sizes } from "@/constants";

import { Canvas } from "@react-three/fiber";

import { View } from "@react-three/drei";
import { animateWithGsap, animateWithGsapTimeline } from "@/utils/animations";
import ModelView from "../model-view/model-view.componet";
import Image from "next/image";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#BFBAB1", "#FFE789", "#6F6C64"],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // Rotation values for both views
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  // Hold the state for 'eventSource' of Canvas component
  const [eventSrc, setEventSrc] = useState(null);

  // Timeline Animation
  const tl = gsap.timeline();

  // useEffect for timeline animation between large and small views
  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 1,
      });
    }

    if (size === "small") {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 1,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  useGSAP(() => {
    animateWithGsap("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      console.error("Root element not found");
    } else {
      setEventSrc(rootElement);
    }
  }, [eventSrc]);

  return (
    <ModelContainer id="model" className="common-padding">
      <ModelContent id="content">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <ModelImageWrapper>
          <ModelImageContainer>
            {/* Small iPhone View */}
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            {/* Large iPhone View */}
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="size-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                pointerEvents: "none", // Ensure Canvas does not intercept pointer events
              }}
              eventSource={eventSrc}
            >
              <View.Port />
            </Canvas>
          </ModelImageContainer>

          <div className="mx-auto w-full">
            <p className="relative top-[-85px] text-center text-sm font-light">
              {model.title}
            </p>

            <div className="relative mb-4 flex w-full items-center justify-center space-x-2">
              <div>Drag to rotate </div>
              <Image
                src="/assets/images/360-degrees.png"
                alt="360 degrees"
                width={100}
                height={50}
              />
            </div>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="mx-2 size-6 cursor-pointer rounded-full"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </ModelImageWrapper>
      </ModelContent>
    </ModelContainer>
  );
};

export default Model;
