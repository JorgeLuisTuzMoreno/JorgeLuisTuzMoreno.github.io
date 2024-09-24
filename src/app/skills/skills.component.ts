import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: { name: string, level: number }[] = [
    { name: 'Desarrollo Ágil', level: 90 },
    { name: 'Patrones de diseño', level: 80 },
    { name: 'Manejo de bases de datos', level: 75 },
    { name: 'Diseño de arquitecturas escalables', level: 85 },
    { name: 'Seguridad informática', level: 70 },
    { name: 'Control de versiones', level: 95 },
    { name: 'Adaptación a nuevas tecnologías', level: 85 },
    { name: 'Refactorización de código', level: 80 },
    { name: 'Control de calidad del software', level: 90 },
    { name: 'Análisis de requerimientos', level: 75 }
  ];
}
