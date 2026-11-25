import { Component } from '@angular/core';
import { PROJECTS } from '../data/portfolio.data';
@Component({
  selector: 'app-projects',
  template: `
  <section class="s" id="projects"><div class="container">
    <h2 class="title">Major projects</h2><p class="sub">Company systems I've built and maintained</p>
    <div class="grid">
      @for (p of projects; track p.name) {
      <article class="card"><div class="ic">{{p.icon}}</div><h3>{{p.name}}</h3><p>{{p.text}}</p>
        <div>@for (t of p.tags; track t) {<span class="tag">{{t}}</span>}</div></article>}
    </div>
  </div></section>`,
  styles: [`.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:1.3rem}
  .ic{font-size:1.1rem;font-weight:800;color:var(--accent);margin-bottom:.5rem;letter-spacing:.1em}h3{margin-bottom:.4rem}p{color:var(--muted);margin-bottom:.8rem}`]
})
export class ProjectsComponent { projects = PROJECTS; }
