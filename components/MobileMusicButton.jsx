"use client";
import { useState, useEffect, useRef } from "react";
import { Music } from "lucide-react";

export default function MobileMusicButton() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play on desktop
  useEffect(() => {
    if (!isMobile && audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [isMobile]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleMusic}
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            background: "#1f1a17",
            padding: "12px",
            borderRadius: "50%",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 9999
          }}
        >
          <Music
            color="white"
            strokeWidth={1}
            size={24}
            style={{ opacity: isPlaying ? 1 : 0.6 }}
          />
        </button>
      )}

      <audio ref={audioRef} src="/background.mp3" loop />
    </>
  );
}
