import { Component } from '@angular/core';
import { Onomatopia } from './models/onomatopia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue sur le site de DamDamWCS !';
  onomatopoeiaList: Onomatopia[] = [];
  onReceiveNewOnomatopia(event:Onomatopia):void {
this.onomatopoeiaList.push(event)
console.log(this.onomatopoeiaList)
  }
}
