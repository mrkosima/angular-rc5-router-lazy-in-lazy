import { Routes, RouterModule } from '@angular/router';
import { LazyNamedComponent } from './lazy-named.component';
import { EmptyComponent } from '../shared/empty.component';

const outletARoutes: Routes = [
  {
    path: 'level1',
    outlet: 'outletA',
    loadChildren: 'app/lazy-named/lazy-named-level1/lazy-named-level1.module'
  },
  {
    path: 'level2',
    outlet: 'outletA',
    loadChildren: 'app/lazy-named/lazy-named-level2/lazy-named-level2.module'
  }
];

const outletBRoutes: Routes = [
  {
    path: 'level1',
    outlet: 'outletB',
    loadChildren: 'app/lazy-named/lazy-named-level1/lazy-named-level1.module'
  },
  {
    path: 'level2',
    outlet: 'outletB',
    loadChildren: 'app/lazy-named/lazy-named-level2/lazy-named-level2.module'
  }
];

const lazyNamedRoutes: Routes = [
  {
    path: '',
    component: LazyNamedComponent,
    children: [
      {
        path: '',
        component: EmptyComponent
      },
      {
        path: 'level1',
        loadChildren: 'app/lazy-named/lazy-named-level1/lazy-named-level1.module'
      },
      {
        path: 'level2',
        loadChildren: 'app/lazy-named/lazy-named-level2/lazy-named-level2.module'
      },
      ...outletARoutes,
      ...outletARoutes
    ]
  }
];

export const lazyNamedRouting = RouterModule.forChild(lazyNamedRoutes);