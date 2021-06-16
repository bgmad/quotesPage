import React, { useEffect, useState } from "react";
import HorBGimg from "../assets/BG.png";
import VerBGimg from "../assets/BG-Mobile.png";

export function Background() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function updateWindowSize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return function cleanup() {
      window.removeEventListener("resize", updateWindowSize);
    };
  });

  return (
    <img
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        overflow: "hidden",
        zIndex: -1
      }}
      src={width > height ? HorBGimg : VerBGimg}
      alt={`${width > height ? "Horizotal" : "Vertical"} background`}
    />
  );
}
