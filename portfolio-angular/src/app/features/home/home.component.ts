import { Component, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { HeroSectionComponent } from "./components/hero-section/hero-section.component"
import { AboutSectionComponent } from "./components/about-section/about-section.component"
import { SkillsSectionComponent } from "./components/skills-section/skills-section.component"
import { ExperienceSectionComponent } from "./components/experience-section/experience-section.component"
import { CallToActionSectionComponent } from "./components/call-to-action-section/call-to-action-section.component"
import { EducationSectionComponent } from "./components/education-section/education-section.component"
@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    CallToActionSectionComponent,
    EducationSectionComponent,
  ],
  template: `
    <div class="home-container">
      <app-hero-section></app-hero-section>
      <app-about-section></app-about-section>
      <app-skills-section></app-skills-section>
      <app-experience-section></app-experience-section>
      <app-call-to-action-section></app-call-to-action-section>
      <app-education-section></app-education-section>
    </div>
  `,
  styles: [
    `
    .home-container {
      overflow-x: hidden;
    }
  `,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
