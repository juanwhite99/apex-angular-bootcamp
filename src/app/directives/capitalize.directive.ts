import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    (this.elementRef.nativeElement as HTMLElement).innerHTML = (this.elementRef.nativeElement as HTMLElement).innerHTML.toUpperCase();
  }
}
