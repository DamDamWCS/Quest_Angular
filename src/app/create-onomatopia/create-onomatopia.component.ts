import { Component, EventEmitter, Output } from '@angular/core';
import { Onomatopia } from '../models/onomatopia.model';


@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {

  newOnomatopia:Onomatopia = new Onomatopia();

  @Output() sendOnomatopiaToParent: EventEmitter<Onomatopia> = new EventEmitter();
  createOnomatopia(): void {
    console.log("Valeur de newOnomatopia :",this.newOnomatopia.name);
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
    this.newOnomatopia= new Onomatopia();

  }
}
