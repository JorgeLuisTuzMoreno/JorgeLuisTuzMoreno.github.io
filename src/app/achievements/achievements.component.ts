import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievements = [
    {
      title: 'IEEE Honorary Membership',
      year: '2015',
      description: 'Given to people who have rendered meritorious service to humanity in the IEEE\'s designated fields of interest.'
    },
    {
      title: 'Businessperson of the Year by Fortune Magazine',
      year: '2013',
      description: 'Prize received for the following companies: "SpaceX", "Tesla Motors" and "SolarCity".'
    },
    {
      title: 'FAI Gold Space Medal',
      year: '2010',
      description: 'One of the highest honors in the aerospace industry, shared with prominent personalities like Neil Armstrong and John Glenn.'
    },
    {
      title: 'Honorary doctorate in Design',
      year: '',
      description: 'From the Art Center College of Design.'
    },
    {
      title: 'Honorary doctorate (DUniv) in Aerospace Engineering',
      year: '',
      description: 'From the University of Surrey.'
    },
    {
      title: 'Honorary doctorate of Engineering and Technology',
      year: '',
      description: 'From Yale University.'
    }
  ];
}
