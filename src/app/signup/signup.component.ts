import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  model: User = new User("", "", "", "");

  constructor() { }
  onSubmit(myForm:NgForm): void {
    console.log(this.model);
    myForm.resetForm()
  }

}
