export interface ExperienceEntry {
  role: string
  company: string
  date: string
  description?: string[]
  logo: string
  links?: {
    label: string
    url: string
  }[]
  skills?: string[]
}

export const experienceData: ExperienceEntry[] = [
    {
    role: "NTU PEAK Participant",
    company: "Singtel",
    date: "July 2025",
    description: [
      "Collaborated closely with cross-disciplinary team members and Singtel Cybersecurity mentors",
      "Conducted deepfake detection market research and discussed feasibility constraints to align solution with Singtel's business model and strategies",
      "Developed a proof-of-concept deepfake detection system workflow to aid and train employees in identifying and reporting deepfake media"
    ],
    logo: "/logos/singtel_logo.png",
    links: [
      {
        label: "See Prototype",
        url: "https://cyberteam2-detection-workflow.vercel.app/"
      }
    ],
    skills: ["Data analysis", "Data Orchestration", "Azure Services", "Docker"]
  },
  {
    role: "Data Science Intern",
    company: "DSBJ Pte. Ltd.",
    date: "Dec 2024 - June 2025",
    description: [
      "Designed and deployed an automated end-to-end data pipeline for Accounts Receivables Forecasting using data orchestration tools",
      "Explored efficient machine learning algorithms to address business use cases",
      "Explored prompt engineering techniques and document extraction libraries for proof-of-concept analyses on complex unstructured datasets"
    ],
    logo: "/logos/dsbj_logo.png",
    links: [
      {
        label: "See Testimonial",
        url: "/docs/dsbj_testimonial.pdf"
      }
    ],
    skills: ["Data analysis", "Data Orchestration", "Azure Services", "Docker"]
  },
  {
    role: "Student Researcher - AI in Special Education",
    company: "NTU URECA (Undergraduate Research)",
    date: "Sept 2024 - June 2025",
    description: [
      "Supervised by Assistant Professor Edwin Chng",
      "Evaluated the performance and feasibility of fine-tuned video action detection PyTorch model (SlowFast R50) in accurate classification of autism behaviours.",
      "Explored pose-detection algorithms to detect behaviours in video dataset of children with autism spectrum disorder."
    ],
    logo: "/logos/ureca_logo.jpg",
    links: [
      {
        label: "See Testimonial",
        url: "/docs/ureca_testimonial_2.pdf"
      }
    ],
    skills: ["Video Action Recognition", "Fine-tuning",  "PyTorch"]
  },
  {
    role: "Student Researcher - Brain Science using Deep Learning",
    company: "NTU URECA (Undergraduate Research)",
    date: "Sept 2023 - June 2024",
    description: [
      "Supervised by Assistant Professor Farhan Ali",
      "Pre-processed EEG brain signal data and transformed to spatiotemporal representations.",
      "Implemented transfer learning with pretrained 3D-CNN (MobileNet V2) PyTorch model.",
      "Evaluated the classification performance of epistemic emotions."
    ],
    logo: "/logos/ureca_logo.jpg",
    links: [
      {
        label: "See Testimonial",
        url: "/docs/ureca_testimonial_1.pdf"
      }
    ],
    skills: ["Transfer Learning", "3D-CNN", "PyTorch", "EEG"]
  }
]
