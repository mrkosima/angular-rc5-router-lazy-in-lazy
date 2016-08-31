import { Component }  from '@angular/core';

@Component({
  template: `
    <div style="background: rgba(205, 63, 34, 0.18); padding:5px;">
      <h4>Level 1</h4>
      <router-outlet></router-outlet>
      <router-outlet name="outlet_1"></router-outlet>
    </div>
  `
})
export class Level1Component {

  constructor() {}
}