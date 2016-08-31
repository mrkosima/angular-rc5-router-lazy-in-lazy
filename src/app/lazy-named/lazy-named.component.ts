import { Component } from '@angular/core';
import { Router, ActivatedRoute, UrlTree } from '@angular/router';
import { BaseNavigationComponent } from '../base-navigation.component';

@Component({
  template: `
    <div style="background: rgba(200,150,0,0.3); padding:5px;">
      <h2>Lazy Named Outlet Component</h2>
      <div>
        <span>Primary:</span>
        <button (click)="openLink('')">Empty</button>
        <button (click)="openLink('level1')">Level1</button>
        <button (click)="openLink('level2')">Level2</button>
        <!--<button (click)="openLink('level1/level2')">Level1/Level2</button>-->
      </div>
      <div style="padding-top: 5px">
        <span>Outlet A:</span>
        <button (click)="openLink('', 'outletA')">Empty</button>
        <button (click)="openLink('level1', 'outletA')">Level1</button>
        <button (click)="openLink('level2', 'outletA')">Level2</button>
        <!--<button (click)="openLink('level1/level2', 'outletA')">Level1/Level2</button>-->
      </div>
      <div style="padding-top: 5px">
        <span>Outlet B:</span>
        <button (click)="openLink('', 'outletB')">Empty</button>
        <button (click)="openLink('level1', 'outletB')">Level1</button>
        <button (click)="openLink('level2', 'outletB')">Level2</button>
        <!--<button (click)="openLink('level1/level2', 'outletB')">Level1/Level2</button>-->
      </div>
      <outlets-component></outlets-component>
    </div>
  `
})
export class LazyNamedComponent extends BaseNavigationComponent {

  constructor(router: Router, activatedRoute: ActivatedRoute) {
    super(router, activatedRoute);
  }
}