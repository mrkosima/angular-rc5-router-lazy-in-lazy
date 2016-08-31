import { Component }  from '@angular/core';

@Component({
  template: `
    <div style="background: rgba(200,150,0,0.3); padding:5px;">
      <h2>Lazy Component - OK</h2>
      <div>
        <button routerLink="" >Empty</button>
        <button routerLink="level1">Level1</button>
        <button routerLink="level1/level2">Level1/Level2</button>
        <button routerLink="level2">Level2</button>
      </div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class LazyComponent {

  constructor() {}
}