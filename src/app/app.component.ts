import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from "./signals/signals.component";
import { SintaxisComponent } from './2. sintaxis HTML/sintaxis/sintaxis.component';

@Component({
  selector: 'app-root',
  imports: [SintaxisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'temario';
}
