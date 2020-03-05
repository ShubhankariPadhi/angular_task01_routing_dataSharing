import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private e1:ElementRef,private renderer:Renderer2) {
   // e1.nativeElement.style.backgroundColor="yellow"; // using ElementRef 

   }
  
  
  
   /* @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.e1.nativeElement.style.backgroundColor = color;
  } */

/* 
@HostBinding('style.backgroundColor') bgColor="green";
@HostListener('click')myClick(){
  this.bgColor="blue";
} */

ngAfterViewInit(){
  console.log(this.e1);
  this.renderer.setStyle(this.e1.nativeElement,'backgroundColor','grey');
}

}
