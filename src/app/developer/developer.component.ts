import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent {
  developer: Developer = new Developer(
    'John',
    'Doe',
    30,
    'homme',
    'I AM THE BEST DEVELOPER OF THE WORLD !',
    [
      new Skill('SKILL 1', 'LOGO SKILL 1', 'SITE SKILL 1'),
      new Skill('SKILL 1', 'LOGO SKILL 1', 'SITE SKILL 1'),
    ]
  );
}
