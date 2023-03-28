import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  showAge:boolean = true
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'TO BE OR NOT TO BE ! ',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
}
