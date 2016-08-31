import { Routes, RouterModule } from '@angular/router';
import { Level2Component } from '../shared/level2.component';
import { Level1Component } from '../shared/level1.component';
import { DefaultComponent } from './default.component';
import { EmptyComponent } from '../shared/empty.component';

const outletARoutes: Routes = [
  {
    path: 'level1',
    outlet: 'outletA',
    component: Level1Component,
  },
  {
    path: 'level2',
    outlet: 'outletA',
    component: Level2Component,
  },
  {
    path: 'level1/level2',
    outlet: 'outletA',
    component: Level1Component,
    children: [
      {
        path: '',
        component: Level2Component,
      }
    ]
  }
];

const outletBRoutes: Routes = [
  {
    path: 'level1',
    outlet: 'outletB',
    component: Level1Component,
  },
  {
    path: 'level2',
    outlet: 'outletB',
    component: Level2Component,
  },
  {
    path: 'level1/level2',
    outlet: 'outletB',
    component: Level1Component,
    children: [
      {
        path: '',
        component: Level2Component,
      }
    ]
  }
];

const defaultRoutes: Routes = [
  {
    path: 'default',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: EmptyComponent
      },
      {
        path: 'level1',
        component: Level1Component,
        children: [
          {
            // TODO - case componentless route not works
            path: '',
            component: EmptyComponent,
          },
          {
            path: 'level2',
            component: Level2Component,
          }
        ]
      },
      {
        path: 'level2',
        component: Level2Component,
      },
      ...outletARoutes,
      ...outletBRoutes
    ]
  }
];

export const defaultRouting = RouterModule.forChild(defaultRoutes);