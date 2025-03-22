import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sintaxis',
  imports: [CommonModule, FormsModule],
  templateUrl: './sintaxis.component.html',
  styleUrl: './sintaxis.component.scss'
})
export class SintaxisComponent {

  saludo: string = 'Hola mundo';
  classColor: string = 'rojo';
  idElement: string = 'parrafo';
  colorStyle: string = 'color: blue';
  redColor: string = 'red';
  blueColor: string = 'blue';
  name: string = '';

  funcionSaludar(): string {
    return 'Hola mundo';
  }

  saludarConsole(event: MouseEvent): void {
    console.log('Hola mundo');
    console.log(event);
  }

  mostrarEnConsola(): void {
    console.log('Se disparo este evento');
  }
}
