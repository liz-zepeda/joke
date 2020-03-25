import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary') private isHovering: boolean = false;

  @Input('appCardHover') config =  {
    querySelector : '.card-text'
  }

  constructor(private el: ElementRef,
              private renderer: Renderer) {
  // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  // el.nativeElement.style.backgroundColor = 'gray';
  
  }

  @HostListener('mouseover') onMouseOver() {
    const punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(punchlineEl, 'display', 'block');
    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    const punchlineEl = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(punchlineEl, 'display', 'none');
    this.isHovering =  false;
  }
}
