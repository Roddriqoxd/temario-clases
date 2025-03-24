import { Component } from '@angular/core';
import { CicloVidaComponent } from "../ciclo-vida/ciclo-vida.component";

@Component({
  selector: 'app-principal',
  imports: [CicloVidaComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
 export default class PrincipalComponent {
nombre: string = 'Juan';
data: {nombre: string, apellido: string} = {nombre: 'Juan', apellido: 'Perez'};
isComponetVisible: boolean = true;

  cambiarValor(): void {
    this.nombre = 'Pedro';
  }

  cambiarObjeto(): void {
    this.data.nombre = 'Pedro';
  }

  destrozarcomponente(): void {
this.isComponetVisible= !this.isComponetVisible;
  }


}
