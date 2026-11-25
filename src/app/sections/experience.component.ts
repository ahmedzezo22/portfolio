import { Component } from '@angular/core';
import { EXPERIENCE } from '../data/portfolio.data';
@Component({
  selector: 'app-experience',
  template: `
  <section class="s alt" id="experience"><div class="container">
    <h2 class="title">Professional experience</h2><p class="sub">Where I've worked</p>
    <div class="tl">
      @for (j of jobs; track j.company) {
      <div class="item"><span class="dot"></span>
        <div class="card">
          <div class="top"><h3>{{j.role}}</h3>@if (j.period) {<span class="per">{{j.period}}</span>}</div>
          <p class="co">{{j.company}}</p>
          @if (j.points.length) {<ul>@for (pt of j.points; track pt) {<li>{{pt}}</li>}</ul>}
        </div></div>}
    </div>
  </div></section>`,
  styles: [`.alt{background:#0d1526}
  .tl{position:relative;padding-left:2rem;border-left:2px solid var(--line)}
  .item{position:relative;margin-bottom:1.5rem}
  .dot{position:absolute;left:calc(-2rem - 7px);top:1.7rem;width:12px;height:12px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px #38bdf833}
  .top{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:baseline}
  h3{font-size:1.1rem}.per{color:var(--accent);font-size:.9rem;font-weight:600;white-space:nowrap}
  .co{color:var(--accent2);font-weight:600;margin-bottom:.6rem}
  ul{padding-left:1.1rem;color:#cbd5e1}li{margin:.25rem 0}
  @media(max-width:560px){.tl{padding-left:1.4rem}.dot{left:calc(-1.4rem - 7px)}}`]
})
export class ExperienceComponent { jobs = EXPERIENCE; }
