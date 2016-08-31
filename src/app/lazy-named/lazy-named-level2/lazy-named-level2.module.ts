import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { lazyNamedLevel2Routing } from './lazy-named-level2.routing';

@NgModule({
  imports: [
    SharedModule,
    lazyNamedLevel2Routing
  ],
  declarations: [],
  providers: []
})

export default class LazyNamedLevel2Module {

}