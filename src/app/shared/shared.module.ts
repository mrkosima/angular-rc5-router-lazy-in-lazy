import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Level2Component } from './level2.component';
import { Level1Component } from './level1.component';
import { EmptyComponent } from './empty.component';
import { OutletsComponent } from './outlets.component';

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [EmptyComponent, OutletsComponent, Level1Component, Level2Component],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,

    EmptyComponent,
    OutletsComponent,
    Level1Component,
    Level2Component
  ]
})

export class SharedModule {

}