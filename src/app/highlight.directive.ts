import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.randomColor();
   }

  randomColor = () => {
     const letters = '0123456789ABCDEF';
     let color = '#';

     for(let i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
     }

     return color;
   }

}
