import { NgModule } from '@angular/core';
import { lazyLevel2Routing } from './lazy-level2.routing';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    lazyLevel2Routing
  ]
})
export default class LazyLevel2Module {
}