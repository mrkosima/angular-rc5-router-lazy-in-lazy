import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { DefaultModule } from './default/default.module';
import { ProblemsComponent } from './problems.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    SharedModule,
    DefaultModule
  ],
  declarations: [
    AppComponent,
      ProblemsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
