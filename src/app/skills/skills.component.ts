import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: string[] = [
    'Desarrollo Ágil',
    'Patrones de diseño',
    'Manejo de bases de datos',
    'Diseño de arquitecturas escalables',
    'Seguridad informática',
    'Control de versiones',
    'Adaptación a nuevas tecnologías',
    'Refactorización de código',
    'Control de calidad del software',
    'Análisis de requerimientos'
  ];
}