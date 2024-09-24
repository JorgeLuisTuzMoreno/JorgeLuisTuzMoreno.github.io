import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  interests: string[] = [
    'Física',
    'Sostenibilidad',
    'Filantropía',
    'Redes Sociales',
    'Vida Extraterrestre',
    'Energías Alternativas',
    'Ingeniería Espacial',
    'Lectura',
    'Videojuegos',
    'Inteligencia Artificial'
  ];
}
