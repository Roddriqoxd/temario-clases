import { booleanAttribute, Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.scss'
})
export class ComponenteHijoComponent {

  @Input({alias: 'col', required: true}) color: string = '';
  @Input({transform: booleanAttribute }) condicional: boolean = false;

  @Output() evento = new EventEmitter();

  @HostBinding('style.color') colorTexto: string = 'green';

  @HostListener('click', ['$event'])
  cambiarColor(event: MouseEvent): void {
    console.log(event);
  }


  cambiarEvento(): void {
    this.evento.emit('hola');
  }

}
