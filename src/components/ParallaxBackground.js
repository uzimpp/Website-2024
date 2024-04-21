"use client";
import React, { useState, useEffect } from "react";

const ParallaxBackground = ({ children }) => {
  const [bgHeight, setBgHeight] = useState("100%");
  const multiplier = 4.5;
  useEffect(() => {
    const handleScroll = () => {
      const newHeight =
        Math.max(100 - (window.scrollY * multiplier) / 100, 50) + "%";
      setBgHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: bgHeight,
          left: 0,
          top: 0,
          position: "absolute",
          background: "white",
          zIndex: -2,
          padding: 0,
          margin: 0,
        }}
      >
        {children}
      </div>
      {/* <div
        style={{
          width: "100%",
          height: 200,
          left: 0,
          top: bgHeight,
          position: "absolute",
          background: "#191d22",
          zIndex: 1,
          padding: 0,
          margin: 0,
        }}
      ></div> */}
    </div>
  );
};

export default ParallaxBackground;
