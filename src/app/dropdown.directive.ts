import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
private isOpen =false
  constructor(
    private _eleRef :ElementRef,
    private _renderer :Renderer2
  ) { }

  ngOnInit(): void {
    
  }

  // @HostListener('click')toggleDropdownnew(){
  //   this.isOpen =!this.isOpen
  //   if(this.isOpen){
  //     this._renderer.addClass(this._eleRef.nativeElement.querySelector().collapse,'show')
  //   }
  // }
  @HostListener('click')toggleDropdown(){
    this.isOpen = !this.isOpen;

    if(this.isOpen){
      this._renderer.addClass(this._eleRef.nativeElement.nextElementSibling,'show')
    }else{
      this._renderer.removeClass(this._eleRef.nativeElement.nextElementSibling,'show')
    }
  }
  @HostListener('document :click',['$event.target']) onClickOutside(targetEle:HTMLElement){
    const clickInSide =this._eleRef.nativeElement.contains(targetEle);
    if(!clickInSide){
      this.isOpen =false;
      this._renderer.removeClass(this._eleRef.nativeElement.nextElementSibling,'show')
    }
  }

  @HostListener('document :keydown.escape',['$event'])onEscapePress(event:KeyboardEvent){
    this.isOpen =false;
    this._renderer.removeClass(this._eleRef.nativeElement.nextElementSibling,'show')
  }




}
