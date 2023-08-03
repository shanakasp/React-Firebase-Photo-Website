import React from "react";
import useStorage from "../hooks/useStorage";

const Progressbar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default Progressbar;
