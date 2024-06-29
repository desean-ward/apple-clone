"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "../lights/lights.component";
import IPhone from "../iPhone/iPhone.component";
import { extend } from "@react-three/fiber";
import { View } from "@react-three/drei";
import * as THREE from "three";
import Loader from "../loader/loader.component";

// Extend the Three.js namespace with the View component
extend({ View, IPhone, Loader, Suspense });

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`size-full absolute cursor-pointer ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ?'small' : 'large}`}
        postion={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
