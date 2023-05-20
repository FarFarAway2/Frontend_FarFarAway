import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userType: number = 1;

  onChange(ev:any) {
    this.userType = ev.target.value;
  }
}
