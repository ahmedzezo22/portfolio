import { Component } from '@angular/core';
import { EDUCATION } from '../data/portfolio.data';
@Component({
  selector: 'app-education',
  template: `
  <section class="s" id="education"><div class="container">
    <h2 class="title">Education</h2><p class="sub">Academic background</p>
    <div class="grid">
      <div class="card"><h3>{{e.degree}}</h3><p class="co">{{e.school}}</p>
        <p>Graduation year: <b>{{e.year}}</b> · Grade: <b>{{e.grade}}</b></p>
        <p>Graduation project: <b>{{e.project}}</b> (Grade: {{e.projectGrade}})</p></div>
      <div class="card"><h3>Secondary school</h3><p>{{e.secondary}}</p></div>
    </div>
  </div></section>`,
  styles: [`.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.3rem}.co{color:var(--accent2);font-weight:600;margin:.3rem 0}p{color:#cbd5e1}b{color:#fff}h3{margin-bottom:.3rem}`]
})
export class EducationComponent { e = EDUCATION; }
