export type Video = {
  id: number;
  title: string;
  url: string;
};

export const Videos: Video[] = [
  {
    id: 1,
    title: "Intro Video (5s)",
    url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
  },
  {
    id: 2,
    title: "Demo Video (10s)",
    url: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
  },
  {
    id: 3,
    title: "Extended Test (20s)",
    url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4",
  },
];
