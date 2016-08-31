import { Component }  from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'outlets-component',
  template: `
  <div>
      <div style="background: rgba(55, 67, 110, 0.25); margin:10px; padding:5px; color:#fff; width:30%; display:inline-block; vertical-align: top">
        <span>Outlet A</span>
        <router-outlet name="outletA"></router-outlet>
      </div>
      
      <div style="background: rgba(55, 67, 110, 0.25); margin:10px; padding:5px; color:#fff; width:30%; display:inline-block; vertical-align: top">
        <span>Primary outlet </span>
        <router-outlet></router-outlet>
      </div>
      
      <div style="background: rgba(55, 67, 110, 0.25); margin:10px; padding:5px; color:#fff; width:30%; display:inline-block; vertical-align: top">
        <span>Outlet B</span>
        <router-outlet name="outletB"></router-outlet>
      </div>
  </div>
  `
})
export class OutletsComponent {

  constructor() {}
}