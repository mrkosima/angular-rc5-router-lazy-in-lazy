import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { lazyLevel1Routing } from './lazy-level1.routing';

@NgModule({
  imports: [
    SharedModule,
    lazyLevel1Routing
  ]
})
export default class LazyLevel1Module {
}