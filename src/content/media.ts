export type MediaItem = {
  id: string;
  title: string;
  caption: string;
  category: string;
  type: "image" | "video" | "comparison";
  src: string;
  thumb: string;
  year: string;
  placeholder?: boolean;
};

export const mediaCategories = [
  "All",
  "Triaxial compression",
  "Force chains",
  "Contact networks",
  "Wave propagation",
  "Micro-macro response",
  "Parameter studies"
];

export const mediaItems: MediaItem[] = [
  {
    id: "triaxial-compression-placeholder",
    title: "Triaxial compression sequence",
    caption:
      "Placeholder for an MP4 or WebM animation showing axial loading and evolving granular structure.",
    category: "Triaxial compression",
    type: "video",
    src: "/media/replace-with-triaxial-animation.webm",
    thumb: "/assets/media-triaxial.svg",
    year: "TBD",
    placeholder: true
  },
  {
    id: "force-chains-placeholder",
    title: "Force-chain evolution",
    caption:
      "Placeholder for simulation frames or rendered force-chain visualizations.",
    category: "Force chains",
    type: "image",
    src: "/assets/media-force-chains.svg",
    thumb: "/assets/media-force-chains.svg",
    year: "TBD",
    placeholder: true
  },
  {
    id: "wavefront-placeholder",
    title: "Wavefront propagation",
    caption:
      "Placeholder for a wave propagation movie, amplitude field, or frequency-response figure.",
    category: "Wave propagation",
    type: "video",
    src: "/media/replace-with-wavefront-animation.webm",
    thumb: "/assets/media-wave.svg",
    year: "TBD",
    placeholder: true
  },
  {
    id: "micro-macro-placeholder",
    title: "Micro-macro response comparison",
    caption:
      "Placeholder for before/after or side-by-side plots connecting fabric evolution to stress response.",
    category: "Micro-macro response",
    type: "comparison",
    src: "/assets/media-micro-macro.svg",
    thumb: "/assets/media-micro-macro.svg",
    year: "TBD",
    placeholder: true
  }
];
