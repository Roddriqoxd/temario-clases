import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[modificadorDirective]'
})
export class ModificadorDirective implements OnInit {
  @Input() color = "black";

  @HostListener('click', ['$event'])
  cambiarColor(event: MouseEvent): void {
    this._renderer.setStyle(this._element.nativeElement, 'color', this.color);
  }

  constructor(private _element: ElementRef, private _renderer: Renderer2) {
    console.log(_element)
  }

  ngOnInit(): void {
    // this._renderer.setStyle(this._element.nativeElement, 'color', this.color);
    // this._renderer.setStyle(this._element.nativeElement, 'background', 'red');
  }
}
