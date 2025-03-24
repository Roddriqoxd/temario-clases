import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from "./5. signals - servicios/signals/signals.component";
import { SintaxisComponent } from './2. sintaxis HTML/sintaxis/sintaxis.component';
import { OperadoresComponent } from './3. operadores HTML/operadores/operadores.component';
import { ComponentePadreComponent } from "./4. decoradores componentes/componente-padre/componente-padre.component";
import { ViewChildComponent } from "./4. decoradores componentes/view-child/view-child.component";
import { TemplateComponent } from "./elementos-HTML-angular/ng-template/template/template.component";
import { SaludoComponent } from "./elementos-HTML-angular/ng-template/saludo/saludo.component";
import { MainComponent } from "./elementos-HTML-angular/ng-content/main/main.component";
import { CicloVidaComponent } from './7.Ciclos de vida/ciclo-vida/ciclo-vida.component';
import { RutasPrincipalesComponent } from "./6. rutas/rutas-principales/rutas-principales.component";
import { ExampleComponent } from "./8. Directivas/example/example.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RutasPrincipalesComponent, ExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temario';
}
