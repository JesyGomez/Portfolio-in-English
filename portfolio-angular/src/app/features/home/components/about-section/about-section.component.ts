import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-about-section",
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="about-section py-5" id="about">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mb-5">
        <h2 class="display-4 fw-bold text-gradient mb-3" #sectionTitle>About Me</h2>
        <p class="lead text-muted" #sectionSubtitle>
          Passionate about technology, committed to learning, and ready to build real-world solutions.
        </p>
      </div>
    </div>

    <div class="row align-items-center">
      <!-- Profile Image & Info -->
      <div class="col-lg-5 mb-5 mb-lg-0">
        <div class="about-image-container position-relative" #imageContainer>
          <div class="profile-image-wrapper">
            <img 
              src="assets/image/LogoJG.DS.png" 
              alt="Jesica Gomez - Developer" 
              class="img-fluid rounded-3 shadow-lg profile-image" 
              width="400" 
              height="400">
            <div class="image-overlay"></div>
          </div>

          <!-- Floating Stats -->
          <div class="floating-stat floating-stat-1 glass-effect rounded-3 p-3">
            <div class="stat-icon text-primary mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
              </svg>
            </div>
            <div class="stat-number fw-bold">100%</div>
            <div class="stat-label small text-muted">Commitment</div>
          </div>

          <div class="floating-stat floating-stat-2 glass-effect rounded-3 p-3">
            <div class="stat-icon text-success mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22,4 12,14.01 9,11.01"/>
              </svg>
            </div>
            <div class="stat-number fw-bold">10+</div>
            <div class="stat-label small text-muted">Projects Completed</div>
          </div>
        </div>
      </div>

      <!-- About Content -->
      <div class="col-lg-7">
        <div class="about-content" #aboutContent>
          <h3 class="h2 mb-4">Hi, I'm Jesica Gomez</h3>
          <p class="text-muted mb-4">
            I'm a software developer with over 13 years of work experience in the editorial industry and more than 3 years fully dedicated to programming. 
            I started as a self-taught learner and continued my education through institutions like Universidad de La Punta, UTN, Alura-Oracle, and Codo a Codo.
          </p>

          <p class="text-muted mb-4">
            I have developed pet adoption platforms using Python, Flask, and MySQL; e-commerce sites with Angular; and modern portfolios. 
            I’m passionate about continuous learning, collaborating in teams, and always giving my best in every project.
          </p>

          <!-- Key Points -->
          <div class="row mb-4">
            <div class="col-md-6 mb-3">
              <div class="d-flex align-items-center">
                <div class="feature-icon bg-primary bg-opacity-10 rounded-circle p-2 me-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                    <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"/>
                    <polyline points="9,11 12,14 15,11"/>
                    <line x1="12" y1="2" x2="12" y2="14"/>
                  </svg>
                </div>
                <div>
                  <h6 class="mb-1">Problem Solver</h6>
                  <small class="text-muted">Creative mindset with practical execution</small>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="d-flex align-items-center">
                <div class="feature-icon bg-success bg-opacity-10 rounded-circle p-2 me-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-success">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h6 class="mb-1">Team Player</h6>
                  <small class="text-muted">Collaborative and communicative</small>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="d-flex align-items-center">
                <div class="feature-icon bg-warning bg-opacity-10 rounded-circle p-2 me-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-warning">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
                <div>
                  <h6 class="mb-1">Curious & Self-Taught</h6>
                  <small class="text-muted">Always seeking new knowledge</small>
                </div>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="d-flex align-items-center">
                <div class="feature-icon bg-info bg-opacity-10 rounded-circle p-2 me-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-info">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div>
                  <h6 class="mb-1">Consistent</h6>
                  <small class="text-muted">Always moving forward, no matter what</small>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="d-flex gap-3">
            <a href="mailto:jesicagomez.dev@gmail.com" class="btn btn-gradient btn-lg px-4">
              <span class="me-2">Get in Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
            <a href="/assets/image/English.CV.JesicaGomez.pdf" target="_blank" class="btn btn-outline-gradient btn-lg px-4">
              <span class="me-2">Download CV</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  `,
  styleUrls: ["./about-section.component.scss"],
})
export class AboutSectionComponent implements OnInit, AfterViewInit {
  @ViewChild("sectionTitle") sectionTitle!: ElementRef
  @ViewChild("sectionSubtitle") sectionSubtitle!: ElementRef
  @ViewChild("imageContainer") imageContainer!: ElementRef
  @ViewChild("aboutContent") aboutContent!: ElementRef

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateElements()
  }

  private animateElements(): void {
    const elements = [
      this.sectionTitle.nativeElement,
      this.sectionSubtitle.nativeElement,
      this.imageContainer.nativeElement,
      this.aboutContent.nativeElement,
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
