"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

type Props = {
  url: string;
  onWatched: () => void;
};

export default function CoursePlayer({ url, onWatched }: Props) {
  const playerRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);
  const storageKey = `video-progress-${url}`;

  useEffect(() => {
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress && playerRef.current) {
      playerRef.current.seekTo(parseFloat(savedProgress), "seconds");
    }
  }, [url]);

  const handleProgress = (state: { playedSeconds: number; played: number }) => {
    setProgress(state.playedSeconds);
    localStorage.setItem(storageKey, state.playedSeconds.toString());
    if (state.played >= 0.8) {
      onWatched();
    }
  };

  return (
    <div className="aspect-video w-full rounded-lg overflow-hidden shadow">
      <ReactPlayer
        ref={playerRef}
        url={url}
        controls
        width="100%"
        height="100%"
        onProgress={handleProgress}
      />
    </div>
  );
}
