import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  public oneWayDataBinding: string = 'Hello World';
  public twoWayDataBinding: string = 'Hello World';

  eventBindingHandler(){
    alert("I was triggered by an event");
  }
}
