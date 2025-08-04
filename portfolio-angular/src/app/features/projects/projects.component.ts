import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Project, ProjectCategory, ProjectStatus } from "@core/models/project.interface"

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-page">
      <!-- Hero Section -->
      <section class="projects-hero py-5 text-white">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h1 class="display-3 fw-bold mb-4" #pageTitle>My Projects</h1>
              <p class="lead mb-0" #pageSubtitle>
                A showcase of my recent work and creative solutions
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Filters -->
      <section class="filters-section py-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="d-flex flex-wrap justify-content-center gap-3" #filtersContainer>
                <button 
                  *ngFor="let category of categories" 
                  class="btn btn-outline-primary rounded-pill px-4"
                  [class.active]="activeCategory === category"
                  (click)="setActiveCategory(category)">
                  {{ category }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Projects Grid -->
      <section class="projects-grid py-5">
        <div class="container">
          <div class="row" #projectsGrid>
            <div class="col-lg-4 col-md-6 mb-4" *ngFor="let project of filteredProjects; trackBy: trackByProject">
              <div class="project-card card h-100 border-0 shadow-sm">
                <div class="project-image position-relative overflow-hidden">
                  <img [src]="project.imageUrl" [alt]="project.title" class="card-img-top">
                  <div class="project-overlay position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                    <div class="project-actions d-flex gap-2">
                      <button class="btn btn-light btn-sm rounded-circle" 
                              (click)="openProject(project)"
                              [attr.aria-label]="'View ' + project.title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                      <a *ngIf="project.demoUrl" [href]="project.demoUrl" target="_blank" rel="noopener" 
                         class="btn btn-primary btn-sm rounded-circle"
                         [attr.aria-label]="'View live demo of ' + project.title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                      <a *ngIf="project.githubUrl" [href]="project.githubUrl" target="_blank" rel="noopener" 
                         class="btn btn-dark btn-sm rounded-circle"
                         [attr.aria-label]="'View source code of ' + project.title">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div class="card-body p-4">
                  <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="card-title mb-0">{{ project.title }}</h5>
                    <span class="badge" [class]="getStatusBadgeClass(project.status)">
                      {{ project.status }}
                    </span>
                  </div>
                  
                  <p class="text-muted small mb-3">{{ project.category }}</p>
                  <p class="card-text text-muted mb-3">{{ project.description }}</p>
                  
                  <div class="technologies mb-3">
                    <div class="d-flex flex-wrap gap-1">
                      <span *ngFor="let tech of project.technologies" 
                            class="badge bg-light text-dark rounded-pill px-2 py-1 small">
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                  
                  <div class="project-meta d-flex justify-content-between align-items-center text-muted small">
                    <span>{{ project.completedDate | date:'MMM yyyy' }}</span>
                    <span *ngIf="project.featured" class="text-warning">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Featured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Empty State -->
          <div *ngIf="filteredProjects.length === 0" class="text-center py-5">
            <div class="empty-state">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="text-muted mb-3">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              <h4 class="text-muted">No projects found</h4>
              <p class="text-muted">Try selecting a different category</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Project Modal -->
      <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true" *ngIf="selectedProject">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="projectModalLabel">{{ selectedProject.title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img [src]="selectedProject.imageUrl" [alt]="selectedProject.title" class="img-fluid rounded mb-4">
              
              <div class="row">
                <div class="col-md-8">
                  <h6>Description</h6>
                  <p class="text-muted mb-4">{{ selectedProject.longDescription || selectedProject.description }}</p>
                  
                  <h6>Technologies Used</h6>
                  <div class="d-flex flex-wrap gap-2 mb-4">
                    <span *ngFor="let tech of selectedProject.technologies" 
                          class="badge bg-primary rounded-pill">
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <div class="col-md-4">
                  <h6>Project Details</h6>
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <strong>Category:</strong><br>
                      <span class="text-muted">{{ selectedProject.category }}</span>
                    </li>
                    <li class="mb-2">
                      <strong>Status:</strong><br>
                      <span class="badge" [class]="getStatusBadgeClass(selectedProject.status)">
                        {{ selectedProject.status }}
                      </span>
                    </li>
                    <li class="mb-2">
                      <strong>Completed:</strong><br>
                      <span class="text-muted">{{ selectedProject.completedDate | date:'MMMM yyyy' }}</span>
                    </li>
                  </ul>
                  
                  <div class="d-grid gap-2">
                    <a *ngIf="selectedProject.demoUrl" [href]="selectedProject.demoUrl" target="_blank" rel="noopener" 
                       class="btn btn-primary">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      View Live Demo
                    </a>
                    <a *ngIf="selectedProject.githubUrl" [href]="selectedProject.githubUrl" target="_blank" rel="noopener" 
                       class="btn btn-outline-dark">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="me-2">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild("pageTitle") pageTitle!: ElementRef
  @ViewChild("pageSubtitle") pageSubtitle!: ElementRef
  @ViewChild("filtersContainer") filtersContainer!: ElementRef
  @ViewChild("projectsGrid") projectsGrid!: ElementRef

  activeCategory = "All"
  categories: string[] = [
    "All",
    "Web Application",
    // "Mobile Application",
    "API/Backend",
    "API/Frontend",
    "Tool/Utility",
  ]
  selectedProject: Project | null = null

  projects: Project[] = [
  {
    id: "9",
    title: "Pet Shop E-commerce",
    description: "Online store for pet products built with React and TypeScript",
    longDescription:
      "A responsive and dynamic e-commerce platform for pet products. Includes product catalog, filters, category navigation, shopping cart, user notifications with Toastify, alerts with SweetAlert, and mock REST API integration.",
    technologies: ["React", "TypeScript", "Bootstrap", "SweetAlert", "Toastify", "Mock API"],
    imageUrl: "assets/image/TiendaMascota.png",
    githubUrl: "https://github.com/JesyGomez/ecommerce-mascotas.git",
    demoUrl: "https://ecommerce-patitas.netlify.app",
    featured: true,
    category: ProjectCategory.WEB_APP,
    completedDate: new Date("2025-06-25"),
    status: ProjectStatus.COMPLETED,
  },
  {
    id: "1",
    title: "Pet Adoption Portal",
    description: "Full-featured pet adoption web app with backend, login, and admin panel",
    longDescription:
      "Built with Flask and MySQL, this app allows users to register/login, reset passwords, manage pets and adopters, upload pet images, filter by category, and submit adoption requests. Includes full admin panel and data validation.",
    technologies: ["React", "Python", "Flask", "MySQL", "Bootstrap", "JavaScript"],
    imageUrl: "assets/image/PortalMascotas.png",
    githubUrl: "https://github.com/JesyGomez/PortalMascotas-PoloIT.git",
    demoUrl: "assets/video/PatitasEnCasa.mp4",
    featured: true,
    category: ProjectCategory.WEB_APP,
    completedDate: new Date("2025-07-05"),
    status: ProjectStatus.COMPLETED,
  },
  {
    id: "7",
    title: "Pastelería Tech",
    description: "Sweet and animated landing page for a bakery",
    longDescription:
      "Responsive landing page designed for a bakery business. Includes product showcase, animated sections, WhatsApp integration for direct contact, and visual effects using Bootstrap and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "API from OpenWeatherMap"],
    imageUrl: "assets/image/PasteleriaTech.png",
    githubUrl: "https://github.com/JesyGomez/Pasteleria-TalentoTech.git",
    demoUrl: "https://jesygomez.github.io/Pasteleria-TalentoTech/",
    featured: false,
    category: ProjectCategory.FRONTEND,
    completedDate: new Date("2024-08-01"),
    status: ProjectStatus.COMPLETED,
  },
  {
    id: "8",
    title: "AG's Nails Landing Page",
    description: "Responsive landing page for a real beauty salon",
    longDescription:
      "Static website built with HTML, CSS and Bootstrap to promote a beauty salon. Features services, image gallery, and links to WhatsApp and social media. Clean design, optimized for mobile devices.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: "assets/image/AgNails.png",
    githubUrl: "https://github.com/JesyGomez/ManicuraAGNails.git",
    demoUrl: "https://jesygomez.github.io/ManicuraAGNails/",
    featured: false,
    category: ProjectCategory.FRONTEND,
    completedDate: new Date("2025-03-18"),
    status: ProjectStatus.COMPLETED,
  },
  {
    id: "10",
    title: "Pet Adoption App",
    description: "Basic version of the pet adoption site without a backend",
    longDescription:
      "Static site that lists pets available for adoption. Includes pet details, user interface for adding/removing pets, and basic CRUD simulated in JavaScript. Hosted on GitHub Pages.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: "assets/image/AdopMascotas.png",
    githubUrl: "https://github.com/SabrinaCortez/back-Adopcion-Web.git",
    demoUrl: "https://adrianreciomdq.pythonanywhere.com/",
    featured: false,
    category: ProjectCategory.WEB_APP,
    completedDate: new Date("2024-12-10"),
    status: ProjectStatus.COMPLETED,
  },
  {
    id: "2",
    title: "Angular E-commerce Platform",
    description: "Angular e-commerce platform with Stripe and admin dashboard",
    longDescription:
      "A full e-commerce solution with Angular. Includes user authentication, product catalog, payment integration with Stripe, and an admin dashboard for inventory and order management.",
    technologies: ["Angular", "TypeScript", "Bootstrap", "Stripe"],
    imageUrl: "assets/image/tienda.ecommerce.jpg",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/JesyGomez/e.commerce_Angular17.git",
    featured: true,
    category: ProjectCategory.WEB_APP,
    completedDate: new Date("2023-12-01"),
    status: ProjectStatus.COMPLETED,
  },
  {
    id: "3",
    title: "ForoHub App",
    description: "Forum and discussion app with Spring Boot backend",
    longDescription:
      "Forum-like app built with Java and Spring Boot. Includes token-based authentication (JWT), secure endpoints, RESTful API with Swagger documentation, and tests via Postman.",
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "Mysql", "Postman", "Insomnia"],
    imageUrl: "assets/image/ForoHub.jpg",
    // demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/JesyGomez/Foro-Hub.git",
    featured: true,
    category: ProjectCategory.API,
    completedDate: new Date("2023-10-15"),
    status: ProjectStatus.COMPLETED,
  },
  {
    id: "5",
    title: "Library",
    description: "Library in Java with Spring Boot",
    longDescription:
      "Library of reusable backend components built with Spring Boot. Includes modular architecture, JWT security modules, and Swagger documentation for API use and testing.",
    technologies: ["Java", "Spring Boot", "JWT", "Postgres", "API from Gutendex"],
    imageUrl: "assets/image/libreria.jpeg",
    // demoUrl: "https://components.example.com",
    githubUrl: "https://github.com/JesyGomez/LibrosDesafio.git",
    featured: true,
    category: ProjectCategory.API,
    completedDate: new Date("2024-11-05"),
    status: ProjectStatus.COMPLETED,
  },
  {
    id: "6",
    title: "Spanish Portfolio",
    description: "Personal portfolio website in Spanish",
    longDescription:
      "Portfolio built using React and Tailwind CSS. Showcases projects, skills, and contact information. Includes responsive design, dark mode, and animations using Framer Motion.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    imageUrl: "assets/image/logoportfolioingles.jpg",
    githubUrl: "https://github.com/JesyGomez/PortFolio.git",
    demoUrl: "https://jesygomez.github.io/PortFolio/",
    featured: false,
    category: ProjectCategory.TOOL,
    completedDate: new Date("2023-07-12"),
    status: ProjectStatus.COMPLETED,
  },
  {
    id: "4",
    title: "API Clínica",
    description: "RESTful API for a medical clinic built with Spring Boot",
    longDescription:
      "API system for a clinic with user authentication, patient management, and scheduling. Uses Spring Security with JWT, Swagger docs, and database persistence.",
    technologies: ["Java", "Spring Boot", "Maven", "JPA/Hibernate", "JWT", "Insomnia", "REST Services", "Swagger"],
    imageUrl: "assets/image/FotoClinica.jpg",
    githubUrl: "https://github.com/JesyGomez/ApiClinica.git",
    featured: false,
    category: ProjectCategory.API,
    completedDate: new Date("2024-08-10"),
    status: ProjectStatus.MAINTENANCE,
  },
]


  filteredProjects: Project[] = []

  constructor() {}

  ngOnInit(): void {
    this.filteredProjects = this.projects
  }

  ngAfterViewInit(): void {
    this.animateElements()
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category
    if (category === "All") {
      this.filteredProjects = this.projects
    } else {
      this.filteredProjects = this.projects.filter((project) => project.category === category)
    }
  }

  openProject(project: Project): void {
    this.selectedProject = project
    // In a real app, you would use a modal service or router
    // For now, we'll just set the selected project
  }

  getStatusBadgeClass(status: ProjectStatus): string {
    const classes: { [key: string]: string } = {
      [ProjectStatus.COMPLETED]: "bg-success",
      [ProjectStatus.IN_PROGRESS]: "bg-warning",
      [ProjectStatus.MAINTENANCE]: "bg-info",
    }
    return classes[status] || "bg-secondary"
  }

  trackByProject(index: number, project: Project): string {
    return project.id
  }

  private animateElements(): void {
    const elements = [
      this.pageTitle.nativeElement,
      this.pageSubtitle.nativeElement,
      this.filtersContainer.nativeElement,
      this.projectsGrid.nativeElement,
    ]

    elements.forEach((element, index) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(30px)"
      element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"

      setTimeout(() => {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }, index * 200)
    })
  }
}
