import { Component } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [BodyComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
