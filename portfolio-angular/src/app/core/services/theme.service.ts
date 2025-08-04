import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>("light")
  public currentTheme$ = this.themeSubject.asObservable()

  constructor() {
    this.initializeTheme()
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const theme = savedTheme || (prefersDark ? "dark" : "light")
    this.setTheme(theme)
console.log('Current theme:', theme, 'DOM data-theme:', document.documentElement.getAttribute('data-theme'))
  }

  toggleTheme(): void {
    const currentTheme = this.themeSubject.value
    const newTheme = currentTheme === "light" ? "dark" : "light"
    this.setTheme(newTheme)
  }

  setTheme(theme: string): void {
    this.themeSubject.next(theme)
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  }

  getCurrentTheme(): string {
    return this.themeSubject.value
  }
}
