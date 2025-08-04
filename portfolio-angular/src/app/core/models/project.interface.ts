export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  imageUrl: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  category: ProjectCategory
  completedDate: Date
  status: ProjectStatus
}

export enum ProjectCategory {
  WEB_APP = "Web Application",
  FRONTEND = "API/Frontend",
  API = "API/Backend",
  LIBRARY = "Library/Package",
  TOOL = "Tool/Utility",
}

export enum ProjectStatus {
  COMPLETED = "Completed",
  IN_PROGRESS = "In Progress",
  MAINTENANCE = "Maintenance",
}
