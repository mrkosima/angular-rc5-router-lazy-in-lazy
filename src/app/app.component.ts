import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Lazy routes bug</h1>
    <nav>
      <a routerLink="default" routerLinkActive="active">Default+Named</a>
      <a routerLink="lazy" routerLinkActive="active">Lazy</a>
      <a routerLink="lazy-named" routerLinkActive="active">Lazy Named</a>
    </nav>
    <router-outlet></router-outlet>
    <problems-component></problems-component>
  `
})
export class AppComponent {
}