import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer
      class="site-footer text-light py-5 mt-5 d-flex flex-column align-items-center justify-content-center text-center"
    >
      <div class="icons-redes-sociales mb-3">
        <a class="footer-logo" (click)="scrollToTop()" href="javascript:void(0)">
          <i class="bi bi-arrow-up"></i>
        </a>
      </div>

      <p class="footer-text mb-4">
        I learn and create every day<br />With an achievement-oriented mindset
        and a passion for excellence, I'm ready to tackle new challenges and
        contribute to your team's success
      </p>

      <div
        class="icons-redes-sociales d-flex flex-wrap gap-3 justify-content-center mb-4"
      >
        <a
          href="https://github.com/JesyGomez"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light"
        >
          <i class="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jesygomez/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          href="mailto:dev.jesicagomez@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light"
        >
          <i class="bi bi-envelope"></i>
        </a>
        <a
          id="whatsapp-link"
          href="https://wa.me/+5491139219005"
          target="_blank"
          rel="noopener noreferrer"
          class="text-light"
        >
          <i class="bi bi-whatsapp"></i>
        </a>
      </div>

      <div class="derecho-de-autor">
        Created by Jesica Gomez ({{ currentYear }}) &copy;
      </div>
    </footer>
  `,
  styleUrls: ["./footer.scss"], // Tus estilos SCSS personalizados para el footer
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  // Método para hacer scroll a la parte superior de la página
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}