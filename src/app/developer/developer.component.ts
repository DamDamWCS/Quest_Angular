import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
developer:Developer = new Developer("John","Doe",30,"homme","I AM THE BEST DEVELOPER OF THE WORLD !",[])
skill1: Skill = new Skill("SKILL 1","LOGO SKILL 1","SITE SKILL 1") 
skill2: Skill = new Skill("SKILL 2","LOGO SKILL 2","SITE SKILL 2") 
skills:Skill[] = [this.skill1,this.skill2]
}
