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
  title: "Security Analysis of XOR Based Ciphered Image",
  authors: "P. Sharma, R. Shrivastava, V. K. Sarthi, P. Bhatpahri",
  venue: "Asian Journal of Computer Science and Technology, 7(1), 55-60",
  year: 2018,
  type: "Journal",
  topics: ["cryptography", "image encryption"],
  doi: "10.51983/ajcst-2018.7.1.1829",
  pdf: "/papers/ajcst-2018-xor-security-analysis.pdf",
  bibtex: `@article{sharma2018xor,
  title={Security Analysis of XOR Based Ciphered Image},
  author={Sharma, P. and Shrivastava, R. and Sarthi, V. K. and Bhatpahri, P.},
  journal={Asian Journal of Computer Science and Technology},
  volume={7},
  number={1},
  pages={55--60},
  year={2018},
  doi={10.51983/ajcst-2018.7.1.1829}
}`
},
{
  id: "multilevel-scrambling-affine-2018",
  title:
    "Visual Encryption Using Multilevel Scrambling Followed by Affine Encryption Technique",
  authors: "Piyali Sharma, Pramay Bhatpahri, Ravi Kiran Patnaik, Ravi Shrivastava",
  venue: "Asian Journal of Computer Science and Technology, 7(1), 40-45",
  year: 2018,
  type: "Journal",
  topics: ["cryptography", "image encryption"],
  doi: "10.51983/ajcst-2018.7.1.1832",
  pdf: "/papers/ajcst-2018-multilevel-scrambling-affine.pdf",
  bibtex: `@article{sharma2018multilevel,
  title={Visual Encryption Using Multilevel Scrambling Followed by Affine Encryption Technique},
  author={Sharma, Piyali and Bhatpahri, Pramay and Patnaik, Ravi Kiran and Shrivastava, Ravi},
  journal={Asian Journal of Computer Science and Technology},
  volume={7},
  number={1},
  pages={40--45},
  year={2018},
  doi={10.51983/ajcst-2018.7.1.1832}
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
