import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { InyectableAService } from '../services/inyectable-a.service';

@NgModule({
  declarations: [
    ComponentAComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    InyectableAService
  ],
  exports: [
    ComponentAComponent
  ]
})
export class ModuleAModule { }
