import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { MyFirstModuleRoutingModule } from './my-first-module.routing.module';

@NgModule({
  declarations: [
    MyFirstComponentComponent
  ],
  imports: [
    CommonModule,
    MyFirstModuleRoutingModule
  ],
  exports: [
    MyFirstComponentComponent
  ]
})
export class MyFirstModuleModule { }
