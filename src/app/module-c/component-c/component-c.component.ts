import { Component } from '@angular/core';
import { InyectableBService } from '../../services/inyectable-b.service';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html'
})
export class ComponentCComponent {
  public persistentData!: string;

  constructor(private readonly inyectableBService: InyectableBService) {
    this.persistentData = this.inyectableBService.persistentData;
  }
}
