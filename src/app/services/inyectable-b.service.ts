import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InyectableBService {
  public persistentData: string = 'I\'m a variable inside a singleton.';
  constructor() { }
}
