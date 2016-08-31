import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LazyComponent } from './lazy.component';
import { lazyRouting } from './lazy.routing';

@NgModule({
  imports: [
    SharedModule,
    lazyRouting
  ],
  declarations: [LazyComponent],
  exports: [LazyComponent]
})
export default class LazyModule {
}