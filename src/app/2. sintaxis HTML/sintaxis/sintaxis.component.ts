import { Component } from '@angular/core';

@Component({
  selector: 'app-sintaxis',
  imports: [],
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

funcionSaludar(): string {
  return 'Hola mundo';
}

saludarConsole(event: MouseEvent): void {
  console.log('Hola mundo');
  console.log(event);
}

}
