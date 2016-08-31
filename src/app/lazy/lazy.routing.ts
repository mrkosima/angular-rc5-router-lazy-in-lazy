import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { EmptyComponent } from '../shared/empty.component';

const lazyRoutes: Routes = [
  {
    path: '',
    component: LazyComponent,
    children: [
      {
        path: '',
        component: EmptyComponent
      },
      {
        path: 'level1',
        loadChildren: 'app/lazy/lazy-level1/lazy-level1.module',
      },
      {
        path: 'level2',
        loadChildren: 'app/lazy/lazy-level1/lazy-level2/lazy-level2.module',
      }
    ]
  }
];

export const lazyRouting = RouterModule.forChild(lazyRoutes);