import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importa HttpClient

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], // ¡Añade HttpClientModule!
  template: `
    <div class="contact-page">
      <section class="contact-hero py-5 text-white">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h1 class="display-3 fw-bold mb-4" #pageTitle>Get In Touch</h1>
              <p class="lead mb-0" #pageSubtitle>
                Let's discuss your next project and bring your ideas to life
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="contact-content py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <div class="contact-form-container" #formContainer>
                <h2 class="h3 mb-4">Send Me a Message</h2>
                
                <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="firstName" class="form-label">First Name *</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="firstName" 
                        formControlName="firstName"
                        [class.is-invalid]="isFieldInvalid('firstName')"
                        placeholder="John">
                      <div class="invalid-feedback" *ngIf="isFieldInvalid('firstName')">
                        First name is required
                      </div>
                    </div>
                    
                    <div class="col-md-6 mb-3">
                      <label for="lastName" class="form-label">Last Name *</label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="lastName" 
                        formControlName="lastName"
                        [class.is-invalid]="isFieldInvalid('lastName')"
                        placeholder="Doe">
                      <div class="invalid-feedback" *ngIf="isFieldInvalid('lastName')">
                        Last name is required
                      </div>
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="email" class="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        formControlName="email"
                        [class.is-invalid]="isFieldInvalid('email')"
                        placeholder="john&#64;example.com"> <div class="invalid-feedback" *ngIf="isFieldInvalid('email')">
                        <span *ngIf="contactForm.get('email')?.errors?.['required']">Email is required</span>
                        <span *ngIf="contactForm.get('email')?.errors?.['email']">Please enter a valid email</span>
                      </div>
                    </div>
                    
                    <div class="col-md-6 mb-3">
                      <label for="phone" class="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        class="form-control" 
                        id="phone" 
                        formControlName="phone"
                        placeholder="+1 (555) 123-4567">
                    </div>
                  </div>
                  
                  <div class="mb-3">
                    <label for="company" class="form-label">Company/Organization</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="company" 
                      formControlName="company"
                      placeholder="Your Company Name">
                  </div>
                  
                  <div class="mb-3">
                    <label for="projectType" class="form-label">Project Type *</label>
                    <select 
                      class="form-select" 
                      id="projectType" 
                      formControlName="projectType"
                      [class.is-invalid]="isFieldInvalid('projectType')">
                      <option value="">Select a project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile Application</option>
                      <option value="api-backend">API/Backend Development</option>
                      <option value="consulting">Technical Consulting</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                    <div class="invalid-feedback" *ngIf="isFieldInvalid('projectType')">
                      Please select a project type
                    </div>
                  </div>
                  
                  <div class="mb-3">
                    <label for="budget" class="form-label">Budget Range</label>
                    <select class="form-select" id="budget" formControlName="budget">
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>
                  
                  <div class="mb-3">
                    <label for="timeline" class="form-label">Project Timeline</label>
                    <select class="form-select" id="timeline" formControlName="timeline">
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months-plus">6+ months</option>
                    </select>
                  </div>
                  
                  <div class="mb-4">
                    <label for="message" class="form-label">Project Description *</label>
                    <textarea 
                      class="form-control" 
                      id="message" 
                      rows="5" 
                      formControlName="message"
                      [class.is-invalid]="isFieldInvalid('message')"
                      placeholder="Tell me about your project, goals, and any specific requirements..."></textarea>
                    <div class="invalid-feedback" *ngIf="isFieldInvalid('message')">
                      Please describe your project
                    </div>
                  </div>
                  
                  <div class="mb-4">
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="checkbox" 
                        id="newsletter" 
                        formControlName="newsletter">
                      <label class="form-check-label" for="newsletter">
                        Subscribe to my newsletter for web development tips and updates
                      </label>
                    </div>
                  </div>
                  
                  <div class="d-grid">
                    <button 
                      type="submit" 
                      class="btn btn-send btn-lg"
                      [disabled]="isSubmitting">
                      <span *ngIf="!isSubmitting" class="d-flex align-items-center justify-content-center">
                        <span class="me-2">Send Message</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M22 2L11 13"/>
                          <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                        </svg>
                      </span>
                      <span *ngIf="isSubmitting" class="d-flex align-items-center justify-content-center">
                        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </span>
                    </button>
                  </div>
                </form>
                
                <div *ngIf="submitMessage" class="alert mt-4" 
                     [class.alert-success]="submitSuccess" 
                     [class.alert-danger]="!submitSuccess">
                  {{ submitMessage }}
                </div>
              </div>
            </div>
            
            <div class="col-lg-4">
              <div class="contact-info" #contactInfo>
                <h2 class="h3 mb-4">Contact Information</h2>
                
                <div class="contact-item d-flex align-items-start mb-4">
                  <div class="contact-icon bg-primary bg-opacity-10 rounded-circle p-3 me-3 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h5 class="mb-1">Email</h5>
                    <p class="text-muted mb-1">dev.jesicagomez&#64;gmail.com</p> <small class="text-muted">I'll respond within 24 hours</small>
                  </div>
                </div>
                
                <div class="contact-item d-flex align-items-start mb-4">
                  <div class="contact-icon bg-success bg-opacity-10 rounded-circle p-3 me-3 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-success">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 class="mb-1">Phone</h5>
                    <p class="text-muted mb-1">+54 9 (11) 3921-9005</p>
                    <small class="text-muted">Available Mon-Fri, 9AM-6PM EST</small>
                  </div>
                </div>
                
                <div class="contact-item d-flex align-items-start mb-4">
                  <div class="contact-icon bg-info bg-opacity-10 rounded-circle p-3 me-3 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-info">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h5 class="mb-1">Location</h5>
                    <p class="text-muted mb-1">Buenos Aires, Argentina</p>
                    <small class="text-muted">Open to remote work worldwide</small>
                  </div>
                </div>
                
                <hr class="my-4">
                
                <h5 class="mb-3">Follow Me</h5>
                <div class="social-links d-flex gap-3">
                  <a href="https://github.com/JesyGomez" target="_blank" rel="noopener" class="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/jesygomez" target="_blank" rel="noopener" class="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener" class="social-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
                
                <hr class="my-4">
                
                <div class="availability-status">
                  <h5 class="mb-3">Current Availability</h5>
                  <div class="d-flex align-items-center">
                    <div class="status-indicator rounded-circle me-2" style="width: 12px; height: 12px;"></div>
                    <span class="text-success fw-medium">Available for new projects</span>
                  </div>
                  <small class="text-muted d-block mt-1">Next available: Immediately</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild("pageTitle") pageTitle!: ElementRef;
  @ViewChild("pageSubtitle") pageSubtitle!: ElementRef;
  @ViewChild("formContainer") formContainer!: ElementRef;
  @ViewChild("contactInfo") contactInfo!: ElementRef;

  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = "";
  submitSuccess = false;

  private formspreeUrl = "https://formspree.io/f/movwovko";
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      company: [""],
      projectType: ["", Validators.required],
      budget: [""],
      timeline: [""],
      message: ["", Validators.required],
      newsletter: [false],
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateElements();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    // Añade el chequeo para null o undefined antes de acceder a properties
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

 // --- MODIFICACIÓN DEL MÉTODO onSubmit() ---
  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = "";

      try {
        // Enviar los datos del formulario a Formspree usando HttpClient
        // Formspree espera datos como 'application/x-www-form-urlencoded' o 'application/json'
        // Para enviar como JSON (más moderno):
        const formData = this.contactForm.value;
        const response = await this.http.post(this.formspreeUrl, formData).toPromise(); // .toPromise() para usar async/await

        // Si la respuesta de Formspree es exitosa (código 200), significa que lo recibió.
        // Formspree no devuelve un JSON de éxito por defecto con POST directo sin JS.
        // Si usas fetch/HttpClient, Formspree devuelve un JSON.
        if (response) { // Formspree devuelve un objeto vacío o un mensaje de éxito con 200 OK
            this.submitSuccess = true;
            this.submitMessage = "Thank you for your message! I'll get back to you within 24 hours.";
            this.contactForm.reset(); // Resetea el formulario después del éxito
        } else {
            // Esto es un fallback, Formspree casi siempre devuelve algo en 200 si lo recibe
            this.submitSuccess = false;
            this.submitMessage = "Sorry, there was an error sending your message. Please try again or contact me directly.";
        }
      } catch (error) {
        console.error("Error sending form to Formspree:", error);
        this.submitSuccess = false;
        this.submitMessage = "Sorry, there was an error sending your message. Please try again or contact me directly.";
      } finally {
        this.isSubmitting = false;
        // Opcional: Ocultar el mensaje después de un tiempo
        setTimeout(() => {
          this.submitMessage = "";
        }, 5000);
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach((key) => {
        this.contactForm.get(key)?.markAsTouched();
      });
      this.submitSuccess = false;
      this.submitMessage = "Please fill in all required fields correctly.";
    }
  }


  private animateElements(): void {
    const elements = [
      this.pageTitle.nativeElement,
      this.pageSubtitle.nativeElement,
      this.formContainer.nativeElement,
      this.contactInfo.nativeElement,
    ];

    elements.forEach((element, index) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";

      setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }, index * 200);
    });
  }
}