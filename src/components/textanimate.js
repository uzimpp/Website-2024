"use client";
import { Kanit } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import React, { useEffect, useState } from "react";

const ThaiFont = Kanit({ subsets: ["thai"], weight: ["400"] });
const KoreanFont = Noto_Sans_KR({ subsets: ["latin"], weight: ["500"] });

const textStyles = [
  { content: "Hello", style: { fontFamily: "'Overused Grotesk'" } },
  { content: "สวัสดี", style: ThaiFont.style },
  { content: "Hola", style: { fontFamily: "'Overused Grotesk'" } },
  { content: "안녕", style: KoreanFont.style },
  { content: "Bonjour", style: { fontFamily: "'Overused Grotesk'" } },
];

const TextChangeAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textStyles.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span
      className="textchange"
      style={textStyles[currentIndex].style} // Spread the style object here
    >
      {textStyles[currentIndex].content}
    </span>
  );
};

export default TextChangeAnimation;
