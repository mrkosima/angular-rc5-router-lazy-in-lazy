import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lazy-named'
  },
  {
    path: 'lazy',
    loadChildren: 'app/lazy/lazy.module',
  },
  {
    path: 'lazy-named',
    loadChildren: 'app/lazy-named/lazy-named.module',
  }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});