"use client";
import { createContext, useContext, useState, useRef, useEffect } from "react";

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(() => {
    if (typeof window !== "undefined") {
      // Try to load saved state or default to true for desktop
      const saved = localStorage.getItem("musicIsPlaying");
      if (saved !== null) return JSON.parse(saved);
      return true; // default to playing on first load
    }
    return false;
  });

  const [isMobile, setIsMobile] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Save isPlaying state to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("musicIsPlaying", JSON.stringify(isPlaying));
    }
  }, [isPlaying]);

  // Play/pause audio based on isPlaying and device type
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {
        // Handle play rejection silently
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // On desktop, if no saved state, start playing by default (handled in useState initializer)

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, isMobile, toggleMusic }}>
      {children}
      <audio ref={audioRef} src="/background.mp3" loop />
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used inside a MusicProvider");
  }
  return context;
}
