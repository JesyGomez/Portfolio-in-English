import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  logo?: string
  current?: boolean
}

@Component({
  selector: "app-experience-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience-section py-5" id="experience">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="display-4 fw-bold text-gradient mb-3" #sectionTitle>Work Experience</h2>
            <p class="lead text-muted" #sectionSubtitle>
              My professional journey and key achievements
            </p>
          </div>
        </div>
        
        <!-- Timeline -->
        <div class="row">
          <div class="col-12">
            <div class="timeline" #timeline>
              <div class="timeline-item" *ngFor="let exp of experiences; let i = index" [class.timeline-item-right]="i % 2 === 1">
                <div class="timeline-marker">
                  <div class="timeline-marker-inner" [class.current]="exp.current">
                    <svg *ngIf="exp.current" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                    <svg *ngIf="!exp.current" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                </div>
                
                <div class="timeline-content">
                  <div class="card border-0 shadow-sm h-100">
                    <div class="card-body p-4">
                      <!-- Header -->
                      <div class="d-flex align-items-start justify-content-between mb-3">
                        <div class="flex-grow-1">
                          <h4 class="card-title mb-1">{{ exp.position }}</h4>
                          <h5 class="text-primary mb-2">{{ exp.company }}</h5>
                          <div class="d-flex flex-wrap gap-2 text-muted small">
                            <span class="d-flex align-items-center">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-1">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                              </svg>
                              {{ exp.duration }}
                            </span>
                            <span class="d-flex align-items-center">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="me-1">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                              </svg>
                              {{ exp.location }}
                            </span>
                          </div>
                        </div>
                        <span *ngIf="exp.current" class="badge bg-success rounded-pill">Current</span>
                      </div>
                      
                      <!-- Description -->
                      <ul class="list-unstyled mb-4">
                        <li *ngFor="let item of exp.description" class="mb-2 d-flex align-items-start">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary me-2 mt-1 flex-shrink-0">
                            <polyline points="9,11 12,14 22,4"/>
                            <path d="M21,12v7a2,2 0 0,1 -2,2H5a2,2 0 0,1 -2,-2V5a2,2 0 0,1 2,-2h11"/>
                          </svg>
                          <span class="text-muted">{{ item }}</span>
                        </li>
                      </ul>
                      
                      <!-- Technologies -->
                      <div class="technologies">
                        <h6 class="mb-2">Technologies Used:</h6>
                        <div class="d-flex flex-wrap gap-2">
                          <span *ngFor="let tech of exp.technologies" class="badge bg-light text-dark rounded-pill px-3 py-2">
                            {{ tech }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Summary Stats -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="experience-summary glass-effect rounded-4 p-4">
              <div class="row text-center">
                <div class="col-md-3 col-6 mb-3 mb-md-0">
                  <div class="summary-stat">
                    <div class="stat-number h3 text-primary mb-1">{{ getTotalExperience() }}+</div>
                    <div class="stat-label small text-muted">Years Experience</div>
                  </div>
                </div>
                <div class="col-md-3 col-6 mb-3 mb-md-0">
                  <div class="summary-stat">
                    <div class="stat-number h3 text-success mb-1">{{ experiences.length }}</div>
                    <div class="stat-label small text-muted">Companies</div>
                  </div>
                </div>
                <div class="col-md-3 col-6 mb-3 mb-md-0">
                  <div class="summary-stat">
                    <div class="stat-number h3 text-warning mb-1">{{ getTotalProjects() }}+</div>
                    <div class="stat-label small text-muted">Projects Delivered</div>
                  </div>
                </div>
                <div class="col-md-3 col-6">
                  <div class="summary-stat">
                    <div class="stat-number h3 text-info mb-1">{{ getTotalTechnologies() }}</div>
                    <div class="stat-label small text-muted">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./experience-section.component.scss"],
})
export class ExperienceSectionComponent implements OnInit, AfterViewInit {
  @ViewChild("sectionTitle") sectionTitle!: ElementRef
  @ViewChild("sectionSubtitle") sectionSubtitle!: ElementRef
  @ViewChild("timeline") timeline!: ElementRef

experiences: Experience[] = [
  {
    id: "1",
    company: "Pet Portal - Polo IT",
    position: "Junior Full-Stack Developer",
    duration: "2024 - Present",
    location: "Remote",
    current: true,
    description: [
      "Collaborated in a multidisciplinary team (Front-end, Back-end, QA, UX/UI, mentors).",
      "Worked with agile methodologies using Jira and GitHub.",
      "Developed a pet adoption web platform using React, Python, Flask, and MySQL.",
      "Participated actively in all phases of the project, from planning to deployment."
    ],
    technologies: ["React", "Python", "Flask", "MySQL", "Jira", "GitHub"],
  },
  {
    id: "2",
    company: "La Ley S.A.",
    position: "Document Management & Processing",
    duration: "2008 - 2013",
    location: "Buenos Aires, Argentina",
    description: [
      "Handled legal and administrative documents ensuring accuracy and quality.",
      "Performed high-volume text digitization, proofreading, and scanning.",
      "Coordinated with multiple departments to ensure smooth workflow.",
      "Quickly adapted to proprietary systems and demanding editorial workflows."
    ],
    technologies: ["OCR Tools", "Internal Platforms", "Proofreading Tools"],
  }
]


  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateElements()
  }

  getTotalExperience(): number {
    return 3 // Based on career start
  }

  getTotalProjects(): number {
    return 10 // Estimated based on experience
  }

  getTotalTechnologies(): number {
    const allTechs = new Set()
    this.experiences.forEach((exp) => {
      exp.technologies.forEach((tech) => allTechs.add(tech))
    })
    return allTechs.size
  }

  private animateElements(): void {
    const elements = [this.sectionTitle.nativeElement, this.sectionSubtitle.nativeElement, this.timeline.nativeElement]

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
