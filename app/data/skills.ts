export type Skill = {
  title: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    title: "Programming Languages",
    items: ["C", "Python", "Java", "JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Software Development Tools",
    items: [
      "Next.js",
      "ReactJS",
      "React Native",
      "Docker",
      "Postman",
      "MySQL",
      "PostgreSQL",
      "Streamlit",
    ],
  },
  {
    title: "Data/ ML/ AI Tools",
    items: [
      "Plotly",
      "Tableau",
      "TensorFlow",
      "PyTorch",
      "Dagster",
      "LangChain",
    ],
  },
  {
    title: "Languages",
    items: ["English", "Mandarin", "Burmese"],
  },
];
