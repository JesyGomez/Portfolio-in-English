import { Component, OnInit, HostListener } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ThemeService } from "@core/services/theme.service"; 

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg fixed-top glass-effect" [class.navbar-scrolled]="isScrolled">
      <div class="container">
        <!-- Logo -->
        <a class="navbar-brand fw-bold" routerLink="/">
          <span class="text-gradient fs-4">JG</span>
        </a>

        <!-- Mobile Toggle -->
        <button 
          class="navbar-toggler border-0" 
          type="button" 
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="mobileMenuOpen"
          aria-label="Toggle navigation">
          <span class="hamburger" [class.active]="mobileMenuOpen">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <!-- Navigation Links -->
        <div class="collapse navbar-collapse" [class.show]="mobileMenuOpen">
          <ul class="navbar-nav ms-auto me-4">
            <li class="nav-item">
              <a class="nav-link px-3" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobileMenu()">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" routerLink="/projects" routerLinkActive="active" (click)="closeMobileMenu()">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-3" routerLink="/contact" routerLinkActive="active" (click)="closeMobileMenu()">
                Contact
              </a>
            </li>
          </ul>

          <!-- Theme Toggle -->
          <button 
            class="btn btn-outline-secondary rounded-circle p-2 theme-toggle" 
            (click)="toggleTheme()" 
            [attr.aria-label]="'Switch to ' + (currentTheme === 'light' ? 'dark' : 'light') + ' theme'">
            <svg *ngIf="currentTheme === 'light'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <svg *ngIf="currentTheme === 'dark'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"></circle>
              <path d="m12 1 0 2m0 18 0 2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12l2 0m18 0 2 0M4.22 19.78l1.42-1.42m12.72-12.72 1.42-1.42"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ["./header.scss"], 
})
export class HeaderComponent implements OnInit { 
  isScrolled = false;
  mobileMenuOpen = false;
  currentTheme = "light";

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.currentTheme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}