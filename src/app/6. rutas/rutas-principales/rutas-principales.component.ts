import { Component } from '@angular/core';
import {RouterModule } from '@angular/router';

@Component({
  selector: 'app-rutas-principales',
  imports: [RouterModule],
  templateUrl: './rutas-principales.component.html',
  styleUrl: './rutas-principales.component.scss'
})
export class RutasPrincipalesComponent {
  title = 'temario';
  cambiarValor() {
      this.title = 'Nuevo valor';
  }
}
