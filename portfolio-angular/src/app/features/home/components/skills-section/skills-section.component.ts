import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";

export enum SkillCategory {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Database",
  DEVOPS = "DevOps",
  TOOLS = "Tools",
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  iconUrl: string;
}

@Component({
  selector: "app-skills-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-section py-5" id="skills">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center mb-5">
        <h2 class="display-4 fw-bold text-gradient mb-3" #sectionTitle>Skills & Expertise</h2>
        <p class="lead text-muted" #sectionSubtitle>
          From curiosity to code — these are the tools shaping my journey as a full-stack developer.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-12 mb-4">
        <div class="skill-categories d-flex flex-wrap justify-content-center gap-3" #skillCategoriesEl>
          <button
            *ngFor="let category of skillCategoriesArray"
            class="btn btn-outline rounded-pill px-4"
            [class.active]="activeCategory === category"
            (click)="setActiveCategory(category)">
            {{ category }}
          </button>
        </div>
      </div>
    </div>

    <div class="row" #skillsGrid>
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4" *ngFor="let skill of filteredSkills; trackBy: trackBySkill">
        <div class="skill-card card h-100 border-0 shadow-sm">
          <div class="card-body text-center p-4">
            <img [src]="skill.iconUrl" [alt]="skill.name + ' icon'" width="48" height="48" class="mb-3" />
            <h5 class="card-title mb-0">{{ skill.name }}</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-12 text-center">
        <div class="skills-summary glass-effect rounded-4 p-4 d-inline-block">
          <div class="row text-center">
            <div class="col-md-4 col-6 mb-3 mb-md-0">
              <div class="summary-stat">
                <div class="stat-number h3 text-primary mb-1">{{ getTotalSkills() }}</div>
                <div class="stat-label small text-muted">Total Skills</div>
              </div>
            </div>
            <div class="col-md-4 col-6 mb-3 mb-md-0">
              <div class="summary-stat">
                <div class="stat-number h3 text-info mb-1">{{ skillCategoriesArray.length - 1 }}</div>
                <div class="stat-label small text-muted">Categories</div>
              </div>
            </div>
            <div class="md-4 col-12">
              <div class="summary-stat">
                <div class="stat-number h3 text-success mb-1">Always Learning</div>
                <div class="stat-label small text-muted">Driven by Curiosity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styleUrls: ["./skills-section.component.scss"],
})
export class SkillsSectionComponent implements OnInit, AfterViewInit {
  @ViewChild("sectionTitle") sectionTitle!: ElementRef;
  @ViewChild("sectionSubtitle") sectionSubtitle!: ElementRef;
  @ViewChild("skillCategoriesEl") skillCategoriesEl!: ElementRef;
  @ViewChild("skillsGrid") skillsGrid!: ElementRef;

  activeCategory = "All";
  skillCategoriesArray: string[] = [
    "All",
    SkillCategory.FRONTEND,
    SkillCategory.BACKEND,
    SkillCategory.DATABASE,
    SkillCategory.DEVOPS,
    SkillCategory.TOOLS,
  ];

  skills: Skill[] = [
    // --- FRONTEND ---
    { id: "html", name: "HTML", category: SkillCategory.FRONTEND, iconUrl: "https://img.icons8.com/color/48/html-5--v1.png" },
    { id: "css", name: "CSS", category: SkillCategory.FRONTEND, iconUrl: "https://img.icons8.com/color/48/css3.png" },
    { id: "js", name: "JavaScript", category: SkillCategory.FRONTEND, iconUrl: "https://img.icons8.com/color/48/javascript--v1.png" },
    { id: "ts", name: "TypeScript", category: SkillCategory.FRONTEND, iconUrl: "https://img.icons8.com/color/48/typescript.png" },
    { id: "angular", name: "Angular", category: SkillCategory.FRONTEND, iconUrl: "https://img.icons8.com/color/48/angularjs.png" },
    { id: "react", name: "ReactJS", category: SkillCategory.FRONTEND, iconUrl: "https://img.icons8.com/color/48/react-native.png" },
    { id: "sweetalert", name: "SweetAlert", category: SkillCategory.FRONTEND, iconUrl: "https://miro.medium.com/v2/resize:fit:664/1*GeJg8f5WU_uM5EjfPwmX0Q.png" }, // De tu CV [cite: 33]

    // --- BACKEND ---
    { id: "java", name: "Java", category: SkillCategory.BACKEND, iconUrl: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" }, // De tu CV [cite: 28, 35, 40, 43, 69, 71]
    { id: "spring", name: "Spring Boot", category: SkillCategory.BACKEND, iconUrl: "assets/image/spring copy.png" }, // De tu CV [cite: 28, 40, 43]
    { id: "python", name: "Python", category: SkillCategory.BACKEND, iconUrl: "https://img.icons8.com/color/48/python--v1.png" }, // De tu CV [cite: 4, 44, 50, 63]
    { id: "flask", name: "Flask", category: SkillCategory.BACKEND, iconUrl: "https://img.icons8.com/fluency/48/flask.png" }, // De tu CV [cite: 4, 45, 50, 63]
    { id: "jwt", name: "JWT", category: SkillCategory.BACKEND, iconUrl: "https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png" }, // De tu CV [cite: 43]

    // --- DATABASE ---
    { id: "mysql", name: "MySQL", category: SkillCategory.DATABASE, iconUrl: "assets/image/mysql.png" }, // De tu CV [cite: 4, 45, 48, 50, 63, 71]
    { id: "postgres", name: "PostgreSQL", category: SkillCategory.DATABASE, iconUrl: "assets/image/postgresql.png" }, // De tu CV [cite: 48]
    { id: "nosql", name: "MongoDB (NoSQL)", category: SkillCategory.DATABASE, iconUrl: "https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.png" }, // De tu CV [cite: 38]

    // --- DEVOPS ---
    { id: "pythonanywhere", name: "PythonAnywhere", category: SkillCategory.DEVOPS, iconUrl: "https://media.licdn.com/dms/image/v2/C561BAQHDnw3jPc3HsA/company-background_10000/company-background_10000/0/1588183934551/pythonanywhere_cover?e=2147483647&v=beta&t=Uff-3MA-5UVmUQaaaV_78Jm_jrI1aevj-1jWRSieF-4" }, // De tu CV [cite: 50, 63]

    // --- TOOLS ---
    { id: "git", name: "Git", category: SkillCategory.TOOLS, iconUrl: "https://img.icons8.com/color/48/git.png" }, // De tu CV [cite: 38, 48, 63, 67]
    { id: "github", name: "GitHub", category: SkillCategory.TOOLS, iconUrl: "assets/image/icons8-github-50.png" }, // De tu CV [cite: 38, 48, 63, 67]
    { id: "bootstrap", name: "Bootstrap", category: SkillCategory.TOOLS, iconUrl: "assets/image/icons8-logotipo-de-bootstrap-48.png" }, // De tu CV [cite: 33, 63, 67]
    { id: "tailwind", name: "Tailwind CSS", category: SkillCategory.TOOLS, iconUrl: "assets/image/icons8-viento-de-cola-css-48.png" }, // De tu CV [cite: 37]
    { id: "firebase", name: "Firebase", category: SkillCategory.TOOLS, iconUrl: "assets/image/firebase_logo_icon.png" }, // De tu CV [cite: 38, 67]
    { id: "vercel", name: "Vercel", category: SkillCategory.TOOLS, iconUrl: "assets/image/Vercel_favicon.svg" }, // De tu CV [cite: 48]
    { id: "netlify", name: "Netlify", category: SkillCategory.TOOLS, iconUrl: "assets/image/Netlify.png" }, // De tu CV
    { id: "postman", name: "Postman", category: SkillCategory.TOOLS, iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdsaOH3LxJisOtkMCdTpqEn-HJmauzZl68A&s" }, // De tu CV [cite: 48]
    { id: "mysqlworkbench", name: "MySQL Workbench", category: SkillCategory.TOOLS, iconUrl: "https://img.icons8.com/fluency/48/mysql-logo.png" }, // De tu CV [cite: 48]
    { id: "intellij", name: "IntelliJ IDEA", category: SkillCategory.TOOLS, iconUrl: "https://img.icons8.com/color/48/intellij-idea.png" }, // De tu CV [cite: 48]
    { id: "insomnia", name: "Insomnia", category: SkillCategory.TOOLS, iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQKJrkgkZqkkVUXnYdqATpo6PjVWKG8N1GA&s" }, // De tu CV [cite: 48]
    { id: "swagger", name: "Swagger", category: SkillCategory.TOOLS, iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXU9HOY5RHuuoPRhUpdaveP2-aCaNAj_udzS1apLLMXBSFAqbIAj6KiTW1JLDkuqyCkf0&usqp=CAU" }, // De tu CV [cite: 48]
    { id: "vscode", name: "VS Code", category: SkillCategory.TOOLS, iconUrl: "https://img.icons8.com/color/48/visual-studio-code-2019.png" }, // De tu CV [cite: 63, 67]
    { id: "netbeans", name: "NetBeans", category: SkillCategory.TOOLS, iconUrl: "https://img.icons8.com/color/48/apache-netbeans.png" }, // De tu CV [cite: 71]
    { id: "trello", name: "Trello", category: SkillCategory.TOOLS, iconUrl: "https://img.icons8.com/color/48/trello.png" }, // De tu CV [cite: 48]
    { id: "Jira", name: "Jira", category: SkillCategory.TOOLS, iconUrl: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" }, // De tu CV [cite: 48]
  ];

  filteredSkills: Skill[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredSkills = this.skills;
  }

  ngAfterViewInit(): void {
    this.animateElements();
  }

  setActiveCategory(category: string): void {
    this.activeCategory = category;
    this.filteredSkills = category === "All"
      ? this.skills
      : this.skills.filter((skill) => skill.category === category);
  }

  getTotalSkills(): number {
    return this.skills.length;
  }

  trackBySkill(index: number, skill: Skill): string {
    return skill.id;
  }

  private animateElements(): void {
    const elements = [
      this.sectionTitle.nativeElement,
      this.sectionSubtitle.nativeElement,
      this.skillCategoriesEl.nativeElement,
      this.skillsGrid.nativeElement,
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