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
    id: "replace-with-publication",
    title: "Replace with publication title",
    authors: "Pramay [Surname placeholder], co-authors",
    venue: "Journal or conference placeholder",
    year: "TBD",
    type: "Placeholder",
    topics: ["granular materials", "constitutive modelling"],
    selected: true,
    featured: true,
    placeholder: true,
    bibtex:
      "@article{replace2026granular,\n  title={Replace with publication title},\n  author={Pramay, Replace},\n  journal={Replace venue},\n  year={TBD}\n}"
  }
];

export const publicationTopics = [
  "granular materials",
  "constitutive modelling",
  "wave propagation",
  "DEM",
  "contact mechanics",
  "data-driven modelling"
];
