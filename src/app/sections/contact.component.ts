import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';
@Component({
  selector: 'app-contact',
  template: `
  <section class="s alt" id="contact"><div class="container">
    <h2 class="title">Contact</h2><p class="sub">Let's talk about your next project or role</p>
    <div class="grid">
      <a class="card" [href]="'mailto:'+p.email"><small>Email</small><strong>{{p.email}}</strong></a>
      <a class="card" [href]="p.phoneHref"><small>Phone</small><strong>{{p.phone}}</strong></a>
      <a class="card" [href]="p.linkedin" target="_blank" rel="noopener"><small>LinkedIn</small><strong>{{p.linkedinLabel}}</strong></a>
      <a class="card" [href]="p.github" target="_blank" rel="noopener"><small>GitHub</small><strong>{{p.githubLabel}}</strong></a>
    </div>
    <p class="loc">{{p.location}}</p>
  </div></section>`,
  styles: [`.alt{background:#0d1526}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.2rem}
  small{display:block;color:var(--muted)}strong{word-break:break-word}.loc{margin-top:1.5rem;color:var(--muted)}`]
})
export class ContactComponent { p = PROFILE; }
