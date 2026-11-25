import { Component, HostListener } from '@angular/core';
import { HeroComponent } from './sections/hero.component';
import { AboutComponent } from './sections/about.component';
import { ExperienceComponent } from './sections/experience.component';
import { ProjectsComponent } from './sections/projects.component';
import { SkillsComponent } from './sections/skills.component';
import { EducationComponent } from './sections/education.component';
import { ContactComponent } from './sections/contact.component';
import { PROFILE } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, EducationComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  p = PROFILE;
  open = false;
  scrolled = false;
  links = [['about','About'],['experience','Experience'],['projects','Projects'],['skills','Skills'],['education','Education'],['contact','Contact']];
  year = new Date().getFullYear();
  @HostListener('window:scroll') onScroll() { this.scrolled = window.scrollY > 20; }
}
