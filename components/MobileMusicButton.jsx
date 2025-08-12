"use client";
import { Music } from "lucide-react";
import { useMusic } from "@/app/context/MusicContext";

export default function MobileMusicButton() {
  const { isMobile, isPlaying, toggleMusic } = useMusic();

  if (!isMobile) return null;

  console.log("isPlaying:",isPlaying);
  

  return (
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
  );
}
