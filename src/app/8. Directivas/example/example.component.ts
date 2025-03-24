import { Component } from '@angular/core';
import { ModificadorPipe } from '../../9. Pipes/modificador.pipe';
import { CommonModule } from '@angular/common';
import { ModificadorDirective } from '../modificador.directive';

interface Alumno {
  nombre: string,
  apellido: string,
  asignatura: string
}

@Component({
  selector: 'app-example',
  imports: [ModificadorPipe, CommonModule, ModificadorDirective],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {

  data: Alumno[] =  [
    { nombre: "Juan", apellido: "Pérez", asignatura: "Matemáticas" },
    { nombre: "Ana", apellido: "Gómez", asignatura: "Historia" },
    { nombre: "Carlos", apellido: "Rodríguez", asignatura: "Biología" },
    { nombre: "Laura", apellido: "Martínez", asignatura: "Física" },
    { nombre: "Pedro", apellido: "López", asignatura: "Química" },
    { nombre: "Marta", apellido: "Fernández", asignatura: "Literatura" },
    { nombre: "Luis", apellido: "González", asignatura: "Geografía" },
    { nombre: "Sofía", apellido: "Díaz", asignatura: "Inglés" },
    { nombre: "Andrés", apellido: "Hernández", asignatura: "Arte" },
    { nombre: "Raquel", apellido: "Sánchez", asignatura: "Música" }
  ];

  fecha: Date= new Date();
}
