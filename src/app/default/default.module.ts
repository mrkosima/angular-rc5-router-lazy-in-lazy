import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DefaultComponent } from './default.component';
import { defaultRouting } from './default.routing';

@NgModule({
  imports: [
    SharedModule,
    defaultRouting
  ],
  declarations: [DefaultComponent],
  exports: [DefaultComponent]
})
export class DefaultModule {
}