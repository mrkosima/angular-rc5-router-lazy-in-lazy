import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LazyNamedComponent } from './lazy-named.component';
import { lazyNamedRouting } from './lazy-named.routing';

@NgModule({
  imports: [
    SharedModule,
    lazyNamedRouting
  ],
  declarations: [LazyNamedComponent],
  exports: [LazyNamedComponent]
})
export default class LazyNamedModule {
}