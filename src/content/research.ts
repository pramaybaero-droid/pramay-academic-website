export type ResearchTheme = {
  id: string;
  title: string;
  eyebrow: string;
  summary: string;
  keyQuestions: string[];
  methods: string[];
  outputs: string[];
  related: string[];
  visual: string;
};

export const researchThemes: ResearchTheme[] = [
  {
    id: "granular-materials",
    title: "Granular materials",
    eyebrow: "Particulate mechanics",
    summary:
      "Granular assemblies are studied as mechanically rich systems where particle-scale contacts, fabric evolution, and confinement govern bulk response.",
    keyQuestions: [
      "How do contact networks reorganize during loading?",
      "Which microstructural descriptors best explain macro-scale strength and dilatancy?",
      "How do packing state and grain-scale mechanisms control stability?"
    ],
    methods: ["Triaxial testing", "DEM", "fabric tensors", "force-chain analysis"],
    outputs: ["stress-strain curves", "fabric evolution maps", "force-chain visualizations"],
    related: ["Triaxial test simulator", "DEM workflows"],
    visual: "/assets/figure-force-chains.svg"
  },
  {
    id: "constitutive-modelling",
    title: "Constitutive modelling",
    eyebrow: "Stress-strain response",
    summary:
      "Constitutive modelling connects measurable response to interpretable state variables and physically meaningful evolution laws.",
    keyQuestions: [
      "Which state variables capture granular hardening and softening?",
      "How can DEM data calibrate robust continuum models?",
      "Where do classical assumptions break down under complex loading?"
    ],
    methods: ["critical state concepts", "model calibration", "inverse analysis", "symbolic regression"],
    outputs: ["model comparison plots", "calibrated parameter sets", "validation dashboards"],
    related: ["Constitutive modelling code", "Data analysis pipelines"],
    visual: "/assets/figure-stress-path.svg"
  },
  {
    id: "wave-propagation",
    title: "Wave propagation",
    eyebrow: "Dynamic response",
    summary:
      "Wave propagation in granular media reveals how nonlinear contacts, packing disorder, and stress state influence signal transmission.",
    keyQuestions: [
      "How do stress state and packing density affect wave speed?",
      "How does attenuation emerge from contact nonlinearity and disorder?",
      "Can dynamic signals diagnose evolving fabric or damage?"
    ],
    methods: ["DEM wave injection", "spectral analysis", "dispersion tracking", "signal processing"],
    outputs: ["wavefront maps", "velocity estimates", "attenuation and dispersion curves"],
    related: ["Wave propagation visualization", "Contact-model comparison tools"],
    visual: "/assets/figure-wavefront.svg"
  },
  {
    id: "dem-simulation",
    title: "DEM and numerical simulation",
    eyebrow: "Computational mechanics",
    summary:
      "Discrete element simulations provide controlled access to particle kinematics, contact forces, and repeatable loading protocols.",
    keyQuestions: [
      "How should simulation workflows be designed for reproducibility?",
      "Which contact parameters most influence bulk response?",
      "How can simulations be connected to experiments without overfitting?"
    ],
    methods: ["YADE", "LAMMPS", "workflow automation", "HPC-ready parameter studies"],
    outputs: ["simulation protocols", "diagnostic plots", "parameter sensitivity maps"],
    related: ["DEM workflows", "Simulation platform"],
    visual: "/assets/figure-dem-assembly.svg"
  },
  {
    id: "contact-mechanics",
    title: "Contact mechanics",
    eyebrow: "Particle-scale laws",
    summary:
      "Contact laws encode normal, tangential, damping, and frictional interactions that shape emergent granular behaviour.",
    keyQuestions: [
      "When do Hertz-Mindlin and Cundall-Strack models diverge in practice?",
      "How should tangential memory and damping be interpreted?",
      "Which contact assumptions matter for quasi-static versus dynamic loading?"
    ],
    methods: ["Hertz-Mindlin", "Cundall-Strack", "contact sensitivity analysis", "benchmark cases"],
    outputs: ["contact-force traces", "law comparison panels", "validation tables"],
    related: ["Contact-model comparison tools"],
    visual: "/assets/figure-contact-model.svg"
  },
  {
    id: "data-driven-modelling",
    title: "Data-driven modelling",
    eyebrow: "ML for mechanics",
    summary:
      "Data-driven mechanics is used carefully as a complement to physical modelling, with emphasis on interpretability and validation.",
    keyQuestions: [
      "How can models learn from DEM while respecting mechanics?",
      "Which features are robust across loading paths?",
      "How can uncertainty and extrapolation risk be made visible?"
    ],
    methods: ["feature engineering", "surrogate modelling", "physics-guided ML", "uncertainty checks"],
    outputs: ["learned response maps", "model diagnostics", "feature importance summaries"],
    related: ["Data analysis pipelines", "Constitutive modelling code"],
    visual: "/assets/figure-data-model.svg"
  }
];
