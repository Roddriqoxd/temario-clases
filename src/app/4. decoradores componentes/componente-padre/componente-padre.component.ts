import { Component } from '@angular/core';
import { ComponenteHijoComponent } from '../componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-componente-padre',
  imports: [ComponenteHijoComponent],
  templateUrl: './componente-padre.component.html',
  styleUrl: './componente-padre.component.scss'
})
export class ComponentePadreComponent {


recinitEvento(event: string){
  console.log(event);
}
}
