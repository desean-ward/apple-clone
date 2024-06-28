import { Html } from "@react-three/drei";
import React from "react";
import { LoaderContainer } from "./loader.styles";

const Loader = () => {
  return (
    <Html className='z-10'>
      {/* Wrap the loader inside Html component to render within the canvas */}
      <LoaderContainer>
        <div className='size-[10vw] rounded-full'>Loading...</div>
      </LoaderContainer>
    </Html>
  );
};

export default Loader;
