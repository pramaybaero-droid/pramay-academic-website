export type NewsItem = {
  date: string;
  title: string;
  description: string;
  href?: string;
  type: "paper" | "talk" | "code" | "update";
};

export const newsItems: NewsItem[] = [
  {
    date: "2026-04-21",
    title: "Website scaffold ready for research updates",
    description:
      "Replace this with a paper acceptance, seminar, code release, simulation update, or conference note.",
    href: "/research",
    type: "update"
  },
  {
    date: "TBD",
    title: "Add first selected publication",
    description:
      "Use src/content/publications.ts to add peer-reviewed papers, preprints, thesis chapters, or conference papers.",
    href: "/publications",
    type: "paper"
  },
  {
    date: "TBD",
    title: "Connect triaxial simulator",
    description:
      "Replace placeholder links with the deployed app, repository, and documentation.",
    href: "/simulations",
    type: "code"
  }
];
