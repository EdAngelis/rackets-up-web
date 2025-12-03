"use client";
import { useState, useEffect } from "react";
import styles from "./typing.module.css";

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
    //WebkitTextStroke: "0.6px #ffffff",
    fontFamily: "var(--font-roboto), sans-serif",
  } as React.CSSProperties;

  return (
    <div className={styles.container} style={outlineStyle}>
      <span className={styles.staticText}>{text[currentWord].static}</span>
      <div className={styles.typedText}>
        {currentText.map((char, index) =>
          char === "|" ? (
            <br key={index} />
          ) : char === " " ? (
            <span
              key={index}
              aria-hidden
              className="inline-block w-1 h-[1em] align-middle"
            />
          ) : (
            <span key={index}>{char}</span>
          )
        )}
      </div>
    </div>
  );
}
