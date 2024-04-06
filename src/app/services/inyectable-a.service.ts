import { Injectable } from '@angular/core';

@Injectable()
export class InyectableAService {
  public strArray: Array<string> = ['one', 'two'];

  constructor() { }
}
