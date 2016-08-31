import { Routes, RouterModule } from '@angular/router';
import { Level1Component } from '../../shared/level1.component';
import { EmptyComponent } from '../../shared/empty.component';

const lazyLevel1Routes: Routes = [
  {
    path: '',
    component: Level1Component,
    children: [
      {
        path: '',
        component: EmptyComponent
      },
      {
        path: 'level2',
        loadChildren: 'app/lazy/lazy-level1/lazy-level2/lazy-level2.module',
      }
    ]
  }
];

export const lazyLevel1Routing = RouterModule.forChild(lazyLevel1Routes);