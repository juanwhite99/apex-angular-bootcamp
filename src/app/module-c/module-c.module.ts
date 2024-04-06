import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCComponent } from './component-c/component-c.component';

@NgModule({
  declarations: [
    ComponentCComponent
  ],
  exports: [
    ComponentCComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleCModule { }
