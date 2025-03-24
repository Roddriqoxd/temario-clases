import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-secundario',
  imports: [RouterModule],
  templateUrl: './secundario.component.html',
  styleUrl: './secundario.component.scss'
})
export class SecundarioComponent {
saludo: string = '';

constructor(private _rutas: Router, private _activatedRouter: ActivatedRoute) {

  // setTimeout(() => {
  //   this._rutas.navigate(['/sintaxis']);
  // }, 2000);




}
}
