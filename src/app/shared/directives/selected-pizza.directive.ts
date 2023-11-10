import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectedPizza]'
})
export class SelectedPizzaDirective {

  @Input() set appSelectedPizza(value: boolean) {
    if (value) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

}
