export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  status: "concept" | "active" | "placeholder";
  featured: boolean;
  tags: string[];
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  docs?: string;
};

export const projects: Project[] = [
  {
    id: "triaxial-test-simulator",
    title: "Interactive Triaxial Test Simulator",
    description:
      "A scientific interface for exploring confining pressure, axial strain, void ratio, and constitutive response.",
    longDescription:
      "Designed as the signature demo area of the website. Replace the placeholder demo link with the live simulator once the app is connected.",
    status: "active",
    featured: true,
    tags: ["triaxial testing", "simulation", "granular mechanics"],
    tech: ["Next.js", "TypeScript", "Python backend placeholder", "scientific visualization"],
    image: "/assets/preview-triaxial.svg",
    github: "https://github.com/replace/triaxial-simulator",
    demo: "/simulations#interactive-triaxial-test-simulator",
    docs: "/projects"
  },
  {
    id: "dem-workflows",
    title: "DEM Workflows",
    description:
      "Reproducible pipelines for particle generation, loading protocols, parameter sweeps, and post-processing.",
    longDescription:
      "A placeholder card for future YADE, LAMMPS, or in-house DEM scripts and reproducible benchmark cases.",
    status: "placeholder",
    featured: true,
    tags: ["DEM", "YADE", "automation"],
    tech: ["Python", "YADE", "LAMMPS", "HPC workflows"],
    image: "/assets/preview-dem.svg",
    github: "https://github.com/replace/dem-workflows",
    docs: "/projects"
  },
  {
    id: "contact-model-comparison",
    title: "Contact-Model Comparison Tools",
    description:
      "Diagnostic utilities for comparing Hertz-Mindlin, Cundall-Strack, damping, and tangential-memory settings.",
    longDescription:
      "Use this card for notebooks or apps that help explain how contact assumptions affect force histories and bulk behaviour.",
    status: "concept",
    featured: true,
    tags: ["contact mechanics", "Hertz-Mindlin", "Cundall-Strack"],
    tech: ["Python", "NumPy", "Matplotlib", "DEM"],
    image: "/assets/preview-contact.svg",
    github: "https://github.com/replace/contact-model-tools"
  },
  {
    id: "constitutive-modelling-code",
    title: "Constitutive Modelling Code",
    description:
      "Calibration, sensitivity analysis, and validation tools for granular stress-strain response.",
    longDescription:
      "A structured placeholder for future model implementations, calibration notebooks, and validation reports.",
    status: "placeholder",
    featured: true,
    tags: ["constitutive modelling", "calibration", "continuum mechanics"],
    tech: ["Python", "SciPy", "Jupyter", "MATLAB"],
    image: "/assets/preview-constitutive.svg",
    github: "https://github.com/replace/constitutive-modelling"
  },
  {
    id: "data-analysis-pipelines",
    title: "Data Analysis Pipelines",
    description:
      "Reusable analysis and visualization routines for experiments, DEM outputs, and feature extraction.",
    longDescription:
      "A future home for cleaned scripts, figure-generation utilities, and reproducible datasets.",
    status: "placeholder",
    featured: false,
    tags: ["data analysis", "visualization", "machine learning"],
    tech: ["Python", "pandas", "scikit-learn", "Plotly"],
    image: "/assets/preview-data.svg",
    github: "https://github.com/replace/granular-data-pipelines"
  }
];
