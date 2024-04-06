import { Component } from '@angular/core';
import { InyectableAService } from '../../services/inyectable-a.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html'
})
export class ComponentAComponent {
  public strArray: Array<string> = [];
  constructor(private readonly inyectableAService: InyectableAService) {
    this.strArray = this.inyectableAService.strArray;
  }
}
