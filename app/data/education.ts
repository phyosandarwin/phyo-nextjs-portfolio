export interface EducationEntry {
  title: string
  institution: string
  date: string
  description?: string
  logo: string
  courses: string[]
  certificates?: string[] // Added field
}

export const educationData: EducationEntry[] = [
  {
    title: "Bachelor of Computing (Hons) in Computer Science",
    institution: "Nanyang Technological University (NTU), Singapore",
    date: "Aug 2022 - Present",
    description: "Expected Graduation in June 2026. Expecting First Class Honours. Doing relevant coursework in AI, data science, and software engineering.",
    logo: "/logos/ntu_logo.png",
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Neural Networks and Deep Learning",
      "Data Visualisation",
      "Data Structures and Algorithms",
      "Software Engineering"
    ],
    certificates: [
      "NTU President Research Scholar for AY23-24 (Merit) and AY24-25 (Distinction)",
      "Google Certificate in Advanced Data Analytics",
      "Google Certificate in Business Intelligence",
      "Google Certificate in Project Management",
    ]
  },
  {
    title: "GCE A-Levels 2021",
    institution: "Raffles Institution, Singapore",
    date: "Jan 2020 - Dec 2021",
    description: "Part of the pandemic-affected student batch. Member of Raffles Water and Environmental Sustainability Programme and Gavel (Public Speaking) Club. Presented research experiment in SSEF 2021 under RWESP.",
    logo: "/logos/ri_logo.png",
    courses: ["H2 Physics", "H2 Mathematics", "H2 Chemistry", "H2 Geography", "H1 General Paper", "H1 Project Work"],
    certificates: [
      "Raffles Academic Excellence Award 2020",
    ]
  },
]
