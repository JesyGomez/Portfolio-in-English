import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-call-to-action-section",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="cta-section py-5 position-relative overflow-hidden">
      <!-- Background Elements -->
      <div class="cta-background position-absolute w-100 h-100">
        <div class="floating-elements">
          <div class="floating-element element-1"></div>
          <div class="floating-element element-2"></div>
          <div class="floating-element element-3"></div>
        </div>
      </div>

      <div class="container position-relative">
        <div class="row">
          <div class="col-12">
            <div class="cta-content text-center" #ctaContent>
              <!-- Main CTA -->
              <div class="main-cta glass-effect rounded-4 p-5 mb-5">
                <h2 class="display-4 fw-bold text-white mb-4">
                  Ready to Build Something Amazing?
                </h2>
                <p class="lead text-white-50 mb-4 mx-auto" style="max-width: 600px;">
                  Let's collaborate and bring your ideas to life. I'm always excited to work on 
                  innovative projects and help businesses achieve their digital goals.
                </p>

                <div class="cta-buttons d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <a routerLink="/contact" class="btn btn-light btn-lg px-5 py-3 d-flex align-items-center justify-content-center">
                    <span class="me-2">Start a Project</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </a>

                  <a routerLink="/projects" class="btn btn-outline-light btn-lg px-5 py-3 d-flex align-items-center justify-content-center">
                    <span class="me-2">View My Work</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Contact Cards -->
              <div class="row">
                <!-- Email -->
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="contact-card card border-0 h-100 glass-effect">
                    <div class="card-body text-center p-4">
                      <div class="contact-icon bg-primary bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                        <!-- SVG Email Icon -->
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <h5 class="card-title text-white mb-2">Email Me</h5>
                      <p class="text-white-50 mb-3">Drop me a line anytime</p>
                      <a href="mailto:dev.jesicagomez&#64;gmail.com" class="btn btn-outline-light btn-sm">
                        dev.jesicagomez&#64;gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Call -->
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="contact-card card border-0 h-100 glass-effect">
                    <div class="card-body text-center p-4">
                      <div class="contact-icon bg-success bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                        <!-- SVG Phone Icon -->
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-success">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </div>
                      <h5 class="card-title text-white mb-2">Call Me</h5>
                      <p class="text-white-50 mb-3">Let's have a conversation</p>
                      <a href="tel:+15551234567" class="btn btn-outline-light btn-sm">
                        +54 9 (11) 3921-9005
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Meet -->
                <div class="col-lg-4 col-md-12 mb-4">
                  <div class="contact-card card border-0 h-100 glass-effect">
                    <div class="card-body text-center p-4">
                      <div class="contact-icon bg-info bg-opacity-10 rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                        <!-- SVG Location Icon -->
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-info">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </div>
                      <h5 class="card-title text-white mb-2">Meet Me</h5>
                      <p class="text-white-50 mb-3">Video call or virtual coffee?</p>
                      <span class="btn btn-outline-light btn-sm">
                        Argentina, BsAs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="social-section mt-5">
                <h4 class="text-white mb-4">Let's Connect</h4>
                <div class="social-links d-flex justify-content-center gap-3">
                  <!-- GitHub -->
                  <a href="https://github.com/JesyGomez" target="_blank" rel="noopener" class="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <!-- LinkedIn -->
                  <a href="https://www.linkedin.com/in/jesygomez" target="_blank" rel="noopener" class="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <!-- Twitter -->
                  <a href="https://twitter.com" target="_blank" rel="noopener" class="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <!-- Dribbble -->
                  <a href="https://jesicagomezdesarrolladora.netlify.app" target="_blank" rel="noopener" class="social-link">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-7.512-1.431-7.512-1.431s-.18-.36-.402-.78c7.540-3.072 7.641-3.087 7.641-3.487zm-7.568 1.5c2.301 0 4.385.784 6.05 2.085-.653.126-6.395 1.287-6.395 1.287s-.18.36-.402.78c-7.54 3.072-7.641 3.087-7.641 3.487C2.432 9.699 3.284 7.699 4.684 6.199c1.665-1.301 3.749-2.085 6.05-2.085z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./call-to-action-section.component.scss"],
})
export class CallToActionSectionComponent implements OnInit, AfterViewInit {
  @ViewChild("ctaContent") ctaContent!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateElements();
  }

  private animateElements(): void {
    const element = this.ctaContent.nativeElement;
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 200);
  }
}