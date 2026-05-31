import { Component } from '@angular/core'

@Component({
  selector: 'pngx-credits',
  template: `
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <p class="text-uppercase small text-primary fw-bold mb-2">Créditos</p>
          <h1 class="h2 mb-3">Bruno Dias de Amorim</h1>
          <p class="text-muted mb-4">
            Backend Architect | Distributed Systems &amp; Cloud (AWS, Kubernetes) | Java,
            .NET (C#), Python, Node.js | RoR &amp; Laravel | Secure &amp; Scalable Systems |
            20+ yrs building production systems | Open to Opportunities
          </p>
          <div class="d-flex flex-wrap gap-2 mb-4">
            <a
              class="btn btn-primary"
              href="https://www.linkedin.com/in/brunodyas/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn — brunodyas
            </a>
            <a
              class="btn btn-dark"
              href="https://github.com/brunodyas"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub — brunodyas
            </a>
          </div>
          <p class="small text-muted mb-0 border-top pt-3">
            Arquitetura, evolução do produto e entrega técnica conduzidas por Bruno Dias de Amorim.
          </p>
        </div>
      </div>
    </div>
  `,
  standalone: true,
})
export class CreditsComponent {}
