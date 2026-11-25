import { Component } from '@angular/core';
import { PROFILE } from '../data/portfolio.data';
@Component({
  selector: 'app-hero',
  template: `
  <section class="hero">
    <div class="container grid">
      <div class="txt">
        <p class="hi">Hello, I'm</p>
        <h1>{{p.name}}</h1>
        <h2>{{p.title}}</h2>
        <p class="lead">Building scalable, maintainable healthcare, ERP and logistics systems with .NET, Angular and microservices.</p>
        <div class="btns">
          <a href="#contact" class="btn primary">Get in touch</a>
          <a href="#experience" class="btn">View experience</a>
        </div>
        <div class="soc">
          <a [href]="p.github" target="_blank" rel="noopener">GitHub</a>
          <a [href]="p.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <div class="ph"><div class="ring"><img src="ahmed-1.jpg" alt="Ahmed AbdElaziz Mourad" width="480" height="640"></div></div>
    </div>
  </section>`,
  styles: [`
  .hero{min-height:min(100vh,760px);display:flex;align-items:center;padding:6rem 0 3rem;background:radial-gradient(900px 500px at 85% 20%,#818cf833,transparent),radial-gradient(700px 400px at 10% 80%,#38bdf822,transparent)}
  .grid{display:grid;grid-template-columns:1.2fr .8fr;gap:3rem;align-items:center}
  .hi{color:var(--accent);font-weight:600;letter-spacing:.05em}
  h1{font-size:clamp(2.2rem,5vw,3.6rem);line-height:1.1;font-weight:800;margin:.4rem 0}
  h2{font-size:clamp(1.2rem,2.5vw,1.7rem);font-weight:600;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:1rem}
  .lead{color:var(--muted);max-width:520px;margin-bottom:1.8rem}
  .btns{display:flex;gap:.8rem;flex-wrap:wrap;margin-bottom:1.5rem}
  .btn{padding:.8rem 1.5rem;border-radius:99px;border:1px solid var(--line);font-weight:600;transition:.2s}
  .btn:hover{border-color:var(--accent);color:var(--accent)}
  .btn.primary{background:linear-gradient(90deg,var(--accent),var(--accent2));color:#0b1220;border:0}
  .btn.primary:hover{color:#0b1220;opacity:.9}
  .soc{display:flex;gap:1.4rem;color:var(--muted)}.soc a:hover{color:var(--accent)}
  .ph{display:flex;justify-content:center}
  .ring{padding:6px;border-radius:28px;background:linear-gradient(135deg,var(--accent),var(--accent2));box-shadow:0 20px 60px #38bdf833;max-width:360px}
  img{display:block;width:100%;height:auto;border-radius:23px;aspect-ratio:3/4;object-fit:cover;object-position:center 25%}
  @media(max-width:820px){.grid{grid-template-columns:1fr;text-align:center}.ph{order:-1}.ring{max-width:240px}.lead{margin-inline:auto}.btns,.soc{justify-content:center}}
  `]
})
export class HeroComponent { p = PROFILE; }
