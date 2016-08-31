import { Routes, RouterModule } from '@angular/router';
import { Level1Component } from '../../shared/level1.component';

const lazyNamedLevel1Routes: Routes = [
  {
    path: '',
    component: Level1Component
  }
];

export const lazyNamedLevel1Routing = RouterModule.forChild(lazyNamedLevel1Routes);