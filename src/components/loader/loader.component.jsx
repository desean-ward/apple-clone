import { Html } from "@react-three/drei";
import React from "react";
import { LoaderContainer } from "./loader.styles";
import { GridLoader } from "react-spinners/GridLoader";

const Loader = () => {
  return (
    <Html className='z-10'>
      {/* Wrap the loader inside Html component to render within the canvas */}
      <LoaderContainer>
        <GridLoader size={10} color={"#00BFFF"} loading={true} />
      </LoaderContainer>
    </Html>
  );
};

export default Loader;
