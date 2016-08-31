import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { lazyNamedLevel1Routing } from './lazy-named-level1.routing';

@NgModule({
  imports: [
    SharedModule,
    lazyNamedLevel1Routing
  ],
  declarations: [],
  providers: []
})

export default class LazyNamedLevel1Module {

}