import {
  Atom,
  BookOpen,
  Boxes,
  Code2,
  GraduationCap,
  Mail,
  Network,
  Waves
} from "lucide-react";

export const siteUrl = "https://pramay.example";

export const profile = {
  name: "B. Pramay",
  shortName: "Pramay",
  role: "PhD Scholar",
  department: "Department of Aerospace Engineering",
  affiliation: "Indian Institute of Science (IISc), Bengaluru",
  location: "Bengaluru, India",
  email: "pramayb@iisc.ac.in",
  portrait: "/assets/portrait-placeholder.svg",
  cvPath: "/cv/pramay-cv-placeholder.pdf",
  identity:
    "Granular materials, constitutive modelling, and wave propagation across physics-informed simulation and data-driven mechanics.",
  shortBio:
    "I study granular materials through computational mechanics, contact modelling, triaxial testing, and data-aware constitutive frameworks.",
  education: [
    "B.Tech in Mechanical Engineering",
    "M.Tech in Machine Design",
    "PhD Scholar in Aerospace Engineering, IISc Bengaluru"
  ],
  researchKeywords: [
    "Granular materials",
    "Constitutive modelling",
    "Wave propagation in granular media",
    "Discrete element method",
    "Contact mechanics",
    "Triaxial testing",
    "Scientific computing",
    "Machine learning for mechanics"
  ],
  socials: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=w8A1gMUAAAAJ&hl=en&oi=sra",
      placeholder: true
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0000-0001-8151-9629",
      placeholder: true
    },
    {
      label: "LinkedIn",
      href: "www.linkedin.com/in/pramay-b-15v11/",
      placeholder: true
    },
    {
      label: "GitHub",
      href: "https://github.com/pramaybaero-droid",
      placeholder: true
    },
    {
      label: "Institutional Profile",
      href: "https://iisc.ac.in",
      placeholder: true
    }
  ]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Projects", href: "/projects" },
  { label: "Simulations", href: "/simulations" },
  { label: "Media", href: "/media" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" }
];

export const researchSignals = [
  {
    title: "Granular mechanics",
    description:
      "Micro-macro response of dense and loose assemblies under confinement, shear, and evolving fabric.",
    icon: Boxes
  },
  {
    title: "Constitutive laws",
    description:
      "Physics-informed stress-strain descriptions that connect contact-scale mechanisms with continuum response.",
    icon: BookOpen
  },
  {
    title: "Wave propagation",
    description:
      "Dynamic transmission, attenuation, and dispersive behaviour in particulate materials and contact networks.",
    icon: Waves
  },
  {
    title: "Contact models",
    description:
      "Hertz-Mindlin, Cundall-Strack, and numerical contact laws for DEM and contact-scale interpretation.",
    icon: Atom
  },
  {
    title: "Simulation tools",
    description:
      "Scientific computing workflows for DEM, triaxial simulation, data analysis, and visualization.",
    icon: Code2
  }
];

export const credibility = [
  {
    label: "Affiliation",
    value: "IISc Bengaluru",
    detail: "Department of Aerospace Engineering",
    icon: GraduationCap
  },
  {
    label: "Methods",
    value: "DEM + experiments",
    detail: "Triaxial tests, contact mechanics, numerical simulation",
    icon: Network
  },
  {
    label: "Software stack",
    value: "Python / YADE / MATLAB",
    detail: "Abaqus, LAMMPS, OpenFOAM, visualization, ML workflows",
    icon: Code2
  },
  {
    label: "Contact",
    value: "Collaboration ready",
    detail: "Research, demos, software, and academic discussions",
    icon: Mail
  }
];
