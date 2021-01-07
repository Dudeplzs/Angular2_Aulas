import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highLightColor: string = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  constructor(private eleRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highLightColor;


  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
  
  
}
