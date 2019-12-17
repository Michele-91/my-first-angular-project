import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {

  color: string;
  condition: boolean;

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input() highlightColor: string;
  // @Input('appHighlight') highlightColor: string;

  // color = 'orange';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
