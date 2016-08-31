import { Routes, RouterModule } from '@angular/router';
import { Level2Component } from '../../shared/level2.component';

const lazyNamedLevel2Routes: Routes = [
  {
    path: '',
    component: Level2Component
  }
];

export const lazyNamedLevel2Routing = RouterModule.forChild(lazyNamedLevel2Routes);