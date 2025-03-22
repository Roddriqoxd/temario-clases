import { Component } from '@angular/core';
import { SintaxisComponent } from '../../2. sintaxis HTML/sintaxis/sintaxis.component';

@Component({
  selector: 'app-operadores',
  imports: [SintaxisComponent],
  templateUrl: './operadores.component.html',
  styleUrl: './operadores.component.scss'
})
export class OperadoresComponent {
condicion: number = 0;

arrayNumero: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

condicion2: number = 2;


cambiarNumero(): void {
 ++this.condicion
}

mostrar(elemento: Element): void {
  console.log(elemento);
}
}
