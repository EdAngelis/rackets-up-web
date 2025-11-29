"use client";
import { useState, useEffect } from "react";

interface ITextObject {
  typeText: string;
  static: string;
}

interface TypewriterProps {
  text: ITextObject[];
  delay: number;
  infinite: boolean;
  pause?: number; // pause between finished text and next (ms)
}

export default function Typewriter({
  text,
  delay,
  infinite,
  pause = 800,
}: TypewriterProps) {
  const [currentText, setCurrentText] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentText([]);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // typing characters
    if (currentIndex <= text[currentWord].typeText.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => [
          ...prev,
          text[currentWord].typeText[currentIndex],
        ]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      // Wait `pause` ms before moving to the next text
      timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText([]);
        setCurrentWord((prevWord) => (prevWord + 1) % text.length);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, currentWord, currentText, pause]);

  const outlineStyle = {
    WebkitTextStroke: "0.6px #ffffff",
    fontFamily: "var(--font-anton), sans-serif",
  } as React.CSSProperties;

  return (
    <div className="w-full min-w-[200px]" style={outlineStyle}>
      <span className="flex flex-wrap text-[18px]">
        {text[currentWord].static}
      </span>
      <span className="flex flex-wrap items-center text-[16px] ">
        {currentText.map((char, index) => (
          <span key={index} className="">
            {char === " " ? (
              <span
                aria-hidden
                className="inline-block w-1 h-[1em] align-middle"
              />
            ) : (
              char
            )}
          </span>
        ))}
      </span>
    </div>
  );
}
