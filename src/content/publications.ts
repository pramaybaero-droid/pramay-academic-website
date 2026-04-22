export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number | "TBD";
  type: "Journal" | "Conference" | "Preprint" | "Thesis" | "Placeholder";
  topics: string[];
  selected?: boolean;
  featured?: boolean;
  placeholder?: boolean;
  doi?: string;
  pdf?: string;
  preprint?: string;
  bibtex?: string;
};

export const publications: Publication[] = [
  {
    id: "ssdm2025-constitutive-modelling-cs-hm",
    title:
      "Constitutive Modelling of Granular Materials Using Cundall-Strack and Hertz-Mindlin Contact Models",
    authors: "B. Pramay, S. Gopalakrishnan, A. M. Shembekar",
    venue:
      "ASME Aerospace Structures, Structural Dynamics, and Materials Conference (SSDM2025), Houston, Texas, USA",
    year: 2025,
    type: "Conference",
    topics: [
      "granular materials",
      "constitutive modelling",
      "DEM",
      "contact mechanics"
    ],
    selected: true,
    featured: true,
    doi: "10.1115/SSDM2025-152166",
    pdf: "/papers/ssdm2025-152166.pdf",
    bibtex: `@inproceedings{pramay2025cs_hm,
  title={Constitutive Modelling of Granular Materials Using Cundall-Strack and Hertz-Mindlin Contact Models},
  author={Pramay, B. and Gopalakrishnan, S. and Shembekar, A. M.},
  booktitle={Proceedings of the ASME Aerospace Structures, Structural Dynamics, and Materials Conference},
  year={2025},
  doi={10.1115/SSDM2025-152166}
}`
  },
  {
    id: "png2025-small-strain-ml",
    title:
      "Prediction of Small-Strain Properties of Dry Sand Using Curve Fitting and Machine Learning Models",
    authors: "Pramay Bhatpahri, Srinivasan Gopalakrishnan",
    venue: "EPJ Web of Conferences 340, 09013 (Powders & Grains 2025)",
    year: 2025,
    type: "Conference",
    topics: [
      "granular materials",
      "small-strain mechanics",
      "machine learning",
      "data-driven modelling",
      "DEM",
      "wave propagation"
    ],
    selected: true,
    featured: true,
    doi: "10.1051/epjconf/202534009013",
    pdf: "/papers/epjconf-2025-09013.pdf",
    bibtex: `@inproceedings{bhatpahri2025smallstrain,
  title={Prediction of Small-Strain Properties of Dry Sand Using Curve Fitting and Machine Learning Models},
  author={Bhatpahri, Pramay and Gopalakrishnan, Srinivasan},
  booktitle={EPJ Web of Conferences},
  volume={340},
  pages={09013},
  year={2025},
  doi={10.1051/epjconf/202534009013}
}`
  },
  {
    id: "xor-based-ciphered-image-2018",
    title: "Security analysis of XOR based ciphered image",
    authors: "P. Sharma, R. Shrivastava, V. K. Sarthi, P. Bhatpahri",
    venue: "Asian Journal of Computer Science and Technology, 7(1), 55-60",
    year: 2018,
    type: "Journal",
    topics: ["cryptography", "image encryption"],
    bibtex: `@article{sharma2018xor,
  title={Security analysis of XOR based ciphered image},
  author={Sharma, P. and Shrivastava, R. and Sarthi, V. K. and Bhatpahri, P.},
  journal={Asian Journal of Computer Science and Technology},
  volume={7},
  number={1},
  pages={55--60},
  year={2018}
}`
  },
  {
    id: "hindi-plaintext-affine-2018",
    title: "Encryption of Hindi Plaintext Using Modified Affine Cipher Technique",
    authors: "P. Sharma, P. Bhatpahri, R. Shrivastava",
    venue: "International Journal of Education and Information Technology, 3(4), 107-111",
    year: 2018,
    type: "Journal",
    topics: ["cryptography", "text encryption"],
    bibtex: `@article{sharma2018hindi,
  title={Encryption of Hindi Plaintext Using Modified Affine Cipher Technique},
  author={Sharma, P. and Bhatpahri, P. and Shrivastava, R.},
  journal={International Journal of Education and Information Technology},
  volume={3},
  number={4},
  pages={107--111},
  year={2018}
}`
  },
  {
    id: "multilevel-scrambling-affine-2018",
    title:
      "Visual Encryption Using Multilevel Scrambling Followed by Affine Encryption Technique",
    authors: "P. Sharma, P. Bhatpahri, R. K. Patnaik, R. Shrivastava",
    venue: "Asian Journal of Computer Science and Technology, 7(1), 40-45",
    year: 2018,
    type: "Journal",
    topics: ["cryptography", "image encryption"],
    bibtex: `@article{sharma2018multilevel,
  title={Visual Encryption Using Multilevel Scrambling Followed by Affine Encryption Technique},
  author={Sharma, P. and Bhatpahri, P. and Patnaik, R. K. and Shrivastava, R.},
  journal={Asian Journal of Computer Science and Technology},
  volume={7},
  number={1},
  pages={40--45},
  year={2018}
}`
  }
];

export const publicationTopics = [
  "granular materials",
  "constitutive modelling",
  "wave propagation",
  "small-strain mechanics",
  "DEM",
  "contact mechanics",
  "machine learning",
  "data-driven modelling",
  "cryptography",
  "image encryption",
  "text encryption"
];
