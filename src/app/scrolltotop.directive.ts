import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrolltotop]'
})
export class ScrolltotopDirective {

  constructor() { }

  @HostListener('click') onClick(){
    //Scroll to the top 
    window.scrollTo({top:0,behavior:'smooth'});
  }


}
