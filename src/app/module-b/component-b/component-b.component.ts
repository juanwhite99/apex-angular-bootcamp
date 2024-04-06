import { Component } from '@angular/core';
import { InyectableBService } from '../../services/inyectable-b.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html'
})
export class ComponentBComponent {
  public persistentData!: string;

  constructor(private readonly inyectableBService: InyectableBService) {
    this.persistentData = this.inyectableBService.persistentData;
  }
}
