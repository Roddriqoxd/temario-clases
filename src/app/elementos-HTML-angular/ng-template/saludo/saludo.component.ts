import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.scss'
})
export class SaludoComponent {
@Input() nombre: string = '';

public saludar(): void {
  console.log('Hola')
}

private estoEsPrivado(): void {
}

}
