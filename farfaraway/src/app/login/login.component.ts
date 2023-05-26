import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private email = '';
  private password = '';

  login() {
    this.email = (<HTMLInputElement>document.getElementById('email')).value;
    this.password = (<HTMLInputElement>document.getElementById('password')).value;
    console.log(this.email + ' / ' + this.password);
  }
}
