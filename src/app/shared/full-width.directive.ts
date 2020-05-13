import { Directive, ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appFullWidth]'
})
export class FullWidthDirective {

  constructor(private el:ElementRef, private _renderer:Renderer2) {
    this.el.nativeElement.style.width = '100%'
   }


}
