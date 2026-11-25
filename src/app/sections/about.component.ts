import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';
@Component({
  selector: 'app-about',
  template: `
  <section class="s" id="about"><div class="container">
    <h2 class="title">About me</h2><p class="sub">Objective</p>
    <div class="row">
      <p class="obj">{{p.objective}}</p>
      <div class="facts">@for (f of p.facts; track f.label) {<div class="card"><small>{{f.label}}</small><strong>{{f.value}}</strong></div>}</div>
    </div>
  </div></section>`,
  styles: [`.row{display:grid;grid-template-columns:1.4fr 1fr;gap:2.5rem}.obj{font-size:1.1rem;color:#cbd5e1}
  .facts{display:grid;gap:1rem}.card{padding:1rem 1.3rem}small{display:block;color:var(--muted)}strong{font-weight:600}
  @media(max-width:820px){.row{grid-template-columns:1fr}}`]
})
export class AboutComponent { p = PROFILE; }
