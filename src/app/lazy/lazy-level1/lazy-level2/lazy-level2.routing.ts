import { Routes, RouterModule } from '@angular/router';
import { Level2Component } from '../../../shared/level2.component';

const lazyLevel2Routes: Routes = [
  {
    path: '',
    component: Level2Component,
  }
];

export const lazyLevel2Routing = RouterModule.forChild(lazyLevel2Routes);