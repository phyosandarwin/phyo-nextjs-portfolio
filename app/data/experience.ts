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
    skills: ["Market Research", "UI/UX Workflow", "Teamwork", "Presentation"]
  },
  {
    role: "Data Science Intern",
    company: "DSBJ Pte. Ltd.",
    date: "Dec 2024 - June 2025",
    description: [
      "Deployed and containerised a fully automated, end-to-end AI prediction pipeline for Accounts Receivables Forecasting using Dagster and Docker, presented to C-suite finance leaders",
      "Utilised Azure OpenAI models for prompt engineering and material taxonomy categorisation",
      "Conducted proof-of-concept analyses with efficient machine learning clustering algorithms for procurement, enabling item similarity insights"
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
      "Fine-tuned video action detection model (SlowFast R50) with PyTorch to classify autism behaviours",
      "Explored pose-detection algorithms on video datasets of children with autism spectrum disorder"
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
      "Pre-processed EEG brain signal data and transformed into spatiotemporal representations",
      "Applied transfer learning with pretrained 3D-CNN (MobileNet V2) PyTorch model for epistemic emotion classification"
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
