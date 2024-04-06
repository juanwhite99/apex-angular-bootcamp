import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentBComponent } from './component-b/component-b.component';

@NgModule({
  declarations: [
    ComponentBComponent
  ],
  exports: [
    ComponentBComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleBModule { }
