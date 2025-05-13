"use client";

import { useEffect, useState } from "react";
import CoursePlayer from "../components/CoursePlayer";
import { Videos } from "../data/Videos";
import CourseMaterials from "../components/CourseMaterials";
import Comments from "../components/Comments";
import PlanStudying from "../components/PlanStudying";
import Progress from "../components/Progress";
import CourseContent from "../components/CourseContent";
import Sections from "../components/Sections";

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState(Videos[0]);
  const [watched, setWatched] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("watchedVideos");
    if (stored) setWatched(JSON.parse(stored));
  }, []);

  const handleWatched = () => {
    if (!watched.includes(selectedVideo.id)) {
      const updated = [...watched, selectedVideo.id];
      setWatched(updated);
      localStorage.setItem("watchedVideos", JSON.stringify(updated));
    }
  };

  const progressPercentage = (watched.length / Videos.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <section className="w-full lg:w-2/3 space-y-6">
          <div className="sticky top-0 z-20 bg-white rounded shadow">
            <CoursePlayer url={selectedVideo.url} onWatched={handleWatched} />
          </div>
          <Sections />
          <CourseMaterials />
          <Comments />
        </section>
        <aside className="w-full lg:w-1/3 space-y-6">
          <Progress progress={progressPercentage} />
          <CourseContent
            selectedVideo={selectedVideo}
            setSelectedVideo={setSelectedVideo}
            watched={watched}
          />
          <PlanStudying />
        </aside>
      </div>
    </div>
  );
}
