import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'ciclo-vida',
  imports: [],
  templateUrl: './ciclo-vida.component.html',
  styleUrl: './ciclo-vida.component.scss'
})
export class CicloVidaComponent implements
OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {
  @ViewChild('nombre') nombreRef!: ElementRef;

  @Input() nombre: string = '';
  @Input() data: {nombre: string, apellido: string} = {nombre: '', apellido: ''};
  saludo: string = 'Hola';

  constructor() {
    console.log('Constructor');
  }

  verElemento(): void {
    console.log(this.nombreRef);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.nombreRef);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['nombre'].firstChange) {
      console.log( "hubo un cambio en los inputs",changes);
    }

  }

  ngOnDestroy(): void {
    console.log('Se esta por destruir el componente');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.nombreRef);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('--------ngAfterViewChecked-----');
  }

  saludar(): void {
    this.saludo = "saludooo"
  }
}
