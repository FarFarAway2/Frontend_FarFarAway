import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private email = '';
  private password = '';
  private token:any;

  constructor(private httpClient:HttpClient, private authService:AuthService) {}

  login() {
    this.email = (<HTMLInputElement>document.getElementById('email')).value;
    this.password = (<HTMLInputElement>document.getElementById('password')).value;
    console.log(this.email + ' / ' + this.password);
    this.authService.login(this.email, this.password).subscribe(result => console.log(result));
  }
}
