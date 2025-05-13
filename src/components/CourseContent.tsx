"use client";
import React from "react";
import { Videos } from "../data/Videos";

type Props = {
  selectedVideo: (typeof Videos)[0];
  setSelectedVideo: (video: (typeof Videos)[0]) => void;
  watched: number[];
};

export default function CourseContent({
  selectedVideo,
  setSelectedVideo,
  watched,
}: Props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-3">📚 Course Content</h2>
      <div className="space-y-2">
        {Videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className={`w-full text-left p-3 rounded border transition hover:bg-blue-50 ${
              video.id === selectedVideo.id ? "bg-blue-100 font-bold" : ""
            }`}
          >
            {video.title}
            {watched.includes(video.id) && (
              <span className="text-green-600 ml-2">✅</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
