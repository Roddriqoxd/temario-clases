import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tercero',
  imports: [],
  templateUrl: './tercero.component.html',
  styleUrl: './tercero.component.scss'
})
export class TerceroComponent {
  nombre: string = '';
  apellido: string = '';

  constructor(private _rutas: Router, private _activatedRouter: ActivatedRoute) {

    this.nombre = this._activatedRouter.snapshot.params['nombre'];
    this.apellido = this._activatedRouter.snapshot.queryParams['apellido'];
  }

}
