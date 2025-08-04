import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero-section position-relative overflow-hidden">
      <!-- Floating Shapes Background -->
      <div class="floating-shapes position-absolute w-100 h-100">
        <div
          class="shape shape-1 position-absolute rounded-circle animate-float"
        ></div>
        <div
          class="shape shape-2 position-absolute rounded-circle animate-float"
        ></div>
        <div
          class="shape shape-3 position-absolute rounded-circle animate-float"
        ></div>
        <div
          class="shape shape-4 position-absolute rounded-circle animate-float"
        ></div>
      </div>

      <div class="container">
        <div class="row align-items-center min-vh-100 py-5">
          <!-- Hero Text -->
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="hero-content">
              <!-- Greeting -->
              <div class="greeting d-flex align-items-center mb-4" #greeting>
                <span class="wave fs-4 me-2 animate-wave">👋</span>
                <span class="fs-5 text-muted">Hello, I'm</span>
              </div>

              <!-- Title -->
              <h1 class="hero-title mb-4" #heroTitle>
                <span class="name text-gradient fw-bold d-block"
                  >Jesica Gomez</span
                >
                <span class="role text-muted d-block mt-2"
                  >Full-Stack Developer</span
                >
              </h1>

              <!-- Description -->
              <p
                class="hero-description fs-5 text-muted mb-5 pe-lg-5"
                #heroDescription
              >
                I craft exceptional digital experiences with cutting-edge
                technologies. Specialized in Angular, React, Spring, and cloud
                architectures. Let's build something amazing together.
              </p>

              <!-- Action Buttons -->
              <div
                class="hero-actions d-flex flex-column flex-sm-row gap-3 mb-5"
                #heroActions
              >
                <a
                  routerLink="/projects"
                  class="btn btn-gradient btn-lg px-4 py-3 d-flex align-items-center justify-content-center"
                >
                  <span class="me-2">View My Work</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>

                <a
                  routerLink="/contact"
                  class="btn btn-outline-gradient btn-lg px-4 py-3 d-flex align-items-center justify-content-center"
                >
                  <span class="me-2">Let's Talk</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>

              <!-- Stats -->
              <div
                class="hero-stats d-flex justify-content-center justify-content-lg-start gap-4"
                #heroStats
              >
                <div class="stat text-center">
                  <div class="stat-number fs-2 fw-bold text-primary">3+</div>
                  <div class="stat-label small text-muted">
                    Years of Intensive Learning
                  </div>
                </div>
                <div class="stat text-center">
                  <div class="stat-number fs-2 fw-bold text-primary">10+</div>
                  <div class="stat-label small text-muted">
                    Personal & Academic Projects
                  </div>
                </div>
                <div class="stat text-center">
                  <div class="stat-number fs-2 fw-bold text-primary">100%</div>
                  <div class="stat-label small text-muted">
                    Commitment & Passion
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Visual -->
          <div class="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
            <div class="hero-visual d-flex justify-content-center" #heroVisual>
              <div
                class="code-window bg-light border rounded-3 shadow-lg overflow-hidden"
                style="max-width: 500px;"
              >
                <!-- Window Header -->
                <div
                  class="window-header bg-secondary bg-opacity-10 p-3 border-bottom d-flex align-items-center"
                >
                  <div class="window-controls d-flex gap-2 me-3">
                    <span
                      class="control bg-danger rounded-circle"
                      style="width: 12px; height: 12px;"
                    ></span>
                    <span
                      class="control bg-warning rounded-circle"
                      style="width: 12px; height: 12px;"
                    ></span>
                    <span
                      class="control bg-success rounded-circle"
                      style="width: 12px; height: 12px;"
                    ></span>
                  </div>
                  <span class="window-title small text-muted font-monospace"
                    >portfolio.ts</span
                  >
                </div>

                <!-- Code Content -->
                <div class="code-content p-4">
                  <pre
                    class="mb-0 font-monospace small lh-lg"
                  ><code><span class="text-danger">class</span> <span class="text-info">Developer</span> {{'{'}}
  <span class="text-primary">name</span>: <span class="text-success">string</span> = <span class="text-warning">'Jesica Gomez'</span>;
  <span class="text-primary">role</span>: <span class="text-success">string</span> = <span class="text-warning">'Full-Stack'</span>;
  <span class="text-primary">skills</span>: <span class="text-success">string[]</span> = [
    <span class="text-warning">'Angular'</span>, <span class="text-warning">'React'</span>, <span class="text-warning">'Spring Boot'</span>,
    <span class="text-warning">'Java'</span>, <span class="text-warning">'Python'</span>
  ];
  
  <span class="text-info">buildAmazingThings</span>() {{'{'}}
    <span class="text-danger">return</span> <span class="text-warning">'🚀 Innovation + Code'</span>;
  {{'}'}}
{{'}'}}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div
          class="scroll-indicator position-absolute bottom-0 start-50 translate-middle-x text-center pb-4"
          #scrollIndicator
        >
          <div class="scroll-text small text-muted mb-2">Scroll to explore</div>
          <div class="scroll-arrow animate-bounce-slow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="text-muted"
            >
              <path d="m7 13 5 5 5-5" />
              <path d="m7 6 5 5 5-5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('greeting') greeting!: ElementRef;
  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroDescription') heroDescription!: ElementRef;
  @ViewChild('heroActions') heroActions!: ElementRef;
  @ViewChild('heroStats') heroStats!: ElementRef;
  @ViewChild('heroVisual') heroVisual!: ElementRef;
  @ViewChild('scrollIndicator') scrollIndicator!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateElements();
  }

  private animateElements(): void {
    const elements = [
      this.greeting.nativeElement,
      this.heroTitle.nativeElement,
      this.heroDescription.nativeElement,
      this.heroActions.nativeElement,
      this.heroStats.nativeElement,
      this.heroVisual.nativeElement,
      this.scrollIndicator.nativeElement,
    ];

    elements.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, index * 150);
    });
  }
}
