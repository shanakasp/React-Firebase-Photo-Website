import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");

  return <div className="img-grid">imgaes</div>;
};

export default ImageGrid;
