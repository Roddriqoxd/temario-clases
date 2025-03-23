import { CommonModule } from '@angular/common';
import { Component, ComponentRef, ElementRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SaludoComponent } from "../saludo/saludo.component";

@Component({
  selector: 'app-template',
  imports: [CommonModule, SaludoComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
@ViewChild('saludo', { read: TemplateRef }) saludoCompoente!: TemplateRef<HTMLElement>;
@ViewChild('contenedor', { read: ViewContainerRef }) saludoContenedor!: ViewContainerRef;
@ViewChild('elementRef', { read: ViewContainerRef }) elementRef!: ViewContainerRef;

saludar: boolean = false;

componentRef?: ComponentRef<SaludoComponent>;

  renderizar(): void {
    // this.saludoContenedor.clear();
    this.saludoContenedor.createEmbeddedView(this.saludoCompoente);
  }


  saludarCondicional(): void {
    this.saludar = !this.saludar;
  }

  renderizarDinamicamente(): void {
    this.elementRef.clear();
    this.elementRef.createComponent(SaludoComponent);
  }

  renderComponent(): void {
    this.elementRef.clear();
    // const componentRef = this.elementRef.createComponent(SaludoComponent);
    // componentRef.instance.nombre = 'Juan';
    this.componentRef = this.elementRef.createComponent(SaludoComponent);
    this.componentRef.instance.nombre = 'Rodrigo';
  }

  async renderizarDinamicamenteLazyloading(): Promise<void> {
    this.elementRef.clear();
    const { SaludoComponent } = await import('../saludo/saludo.component');
    this.elementRef.createComponent(SaludoComponent);
  }
}
