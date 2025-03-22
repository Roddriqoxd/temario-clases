import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from "./5. signals - servicios/signals/signals.component";
import { SintaxisComponent } from './2. sintaxis HTML/sintaxis/sintaxis.component';
import { OperadoresComponent } from './3. operadores HTML/operadores/operadores.component';
import { ComponentePadreComponent } from "./4. decoradores componentes/componente-padre/componente-padre.component";
import { ViewChildComponent } from "./4. decoradores componentes/view-child/view-child.component";

@Component({
  selector: 'app-root',
  imports: [ComponentePadreComponent, ViewChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temario';
}
