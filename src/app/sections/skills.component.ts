import { Component } from '@angular/core';
import { SKILLS } from '../data/portfolio.data';
@Component({
  selector: 'app-skills',
  template: `
  <section class="s alt" id="skills"><div class="container">
    <h2 class="title">Technical skills</h2><p class="sub">Tools and technologies</p>
    <div class="grid">
      @for (g of skills; track g.group) {
      <div class="card"><h3>{{g.group}}</h3><div>@for (i of g.items; track i) {<span class="tag">{{i}}</span>}</div></div>}
    </div>
  </div></section>`,
  styles: [`.alt{background:#0d1526}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:1.3rem}h3{margin-bottom:.7rem;color:var(--accent2)}`]
})
export class SkillsComponent { skills = SKILLS; }
