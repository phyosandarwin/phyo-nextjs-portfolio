export interface ProjectEntry {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string | null
  githubUrl?: string | null
  date: string
}

export const projectsData: ProjectEntry[] = [
  {
    id: 1,
    title: 'AI-Powered Deepfake Detection System Workflow',
    description: 'Enterprise POC for Singtel NTU PEAK Challenge: Human-in-the-loop verification system for employees to identify and report deepfake media.',
    image: '/proj_thumbnail/cyberteam2_singtel_proj.png',
    technologies: ['Next.js', 'TypeScript', 'ShadcnUI'],
    liveUrl: 'https://cyberteam2-detection-workflow.vercel.app/',
    githubUrl: null,
    date: 'July 2025'
  },
  {
    id: 2,
    title: 'Autism Behaviour Classification with Video Action Models',
    description: 'Undergraduate Research project focused on recognising and distinguishing common autism behaviors using SOTA video action models.',
    image: '/proj_thumbnail/ureca_project2.png',
    technologies: ['Pytorch', 'Video Models', 'Pose Detection', 'Deep Learning'],
    liveUrl: null,
    githubUrl: null,
    date: 'Sept 2024 - June 2025'
  },
  {
    id: 3,
    title: 'Ecospeaks AI-powered Environmental Assistant Web App',
    description: 'An assistant equipped with real-time news retrieval, quiz generation and RAG FAQ capabilities focused on enhancing environmental awareness.',
    image: '/proj_thumbnail/ecospeaks_proj.png',
    technologies: ['LangChain', 'Gemini', 'Streamlit', 'Retrieval-Augmented Generation'],
    liveUrl: 'https://ecospeaks-ai.streamlit.app/',
    githubUrl: 'https://github.com/phyosandarwin/ecospeaks-ai',
    date: 'June 2024'
  },
  {
    id: 4,
    title: 'Emotion Analysis with Deep Learning on Brain Signals',
    description: 'Undergraduate Research project focused on deep learning techniques to analyse epistemic emotions across age groups using brain signal data.',
    image: '/proj_thumbnail/ureca_project1.png',
    technologies: ['PyTorch', 'EEG', '3D-CNN', 'Transfer Learning'],
    liveUrl: 'https://youtu.be/NnWvkuF64uQ',
    githubUrl: null,
    date: 'Sept 2023 - June 2024'
  },
  {
    id: 5,
    title: 'AutoInsights AutoML Web App',
    description: 'A user-friendly AutoML app interface to automate data science workflows ranging from EDA to model deployment. Currently only handles classification and regression tasks.',
    image: '/proj_thumbnail/autoinsights_logo.png',
    technologies: ['Streamlit', 'Pycaret', 'AutoML', 'Python'],
    liveUrl: 'https://auto-insights.streamlit.app/',
    githubUrl: 'https://github.com/phyosandarwin/auto-insights',
    date: 'June 2024'
  },
  {
    id: 6,
    title: 'AI-powered OCR Schedule Planner',
    description: 'A schedule planner equipped with OCR capabilities to add events to calendar automatically on top of traditional event form creation and send notifications for event conflicts.',
    image: '/proj_thumbnail/ocr_schedule_planner.png',
    technologies: ['ReactJS', 'Firebase', 'Flask', 'OpenAI'],
    liveUrl: null,
    githubUrl: null,
    date: 'Jan 2024 - Apr 2024'
  }
]
