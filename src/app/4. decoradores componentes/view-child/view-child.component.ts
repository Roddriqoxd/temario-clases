import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { SintaxisComponent } from "../../2. sintaxis HTML/sintaxis/sintaxis.component";

@Component({
  selector: 'app-view-child',
  imports: [SintaxisComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.scss'
})
export class ViewChildComponent {

@ViewChild('name') componenteReferenciado!: ElementRef;
@ViewChildren(SintaxisComponent) elemetos!: QueryList<SintaxisComponent>;

constructor(private renderer: Renderer2) {
 }

verReferencia(): void {
 console.log(this.componenteReferenciado);
}

}
