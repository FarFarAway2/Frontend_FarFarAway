import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = "api-farfaraway-back-production.up.railway.app"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth:boolean=false;
  username: string|undefined;
  role:string|null= null;

  constructor(private httpClient:HttpClient) {
    const sessionUsername=window.sessionStorage.getItem("")
    if(sessionUsername)
    {
      this.username=sessionUsername;
      this.isAuth=true;
      this.role= window.sessionStorage.getItem("auth-role");

    }
  }
  /**
   *
   * Login endpoint
   *  @param email
   *  @param password
   *  @returns
   */
  login(email: string, password:string): Observable<any>
  {
    return this.httpClient.post(AUTH_API + 'login', {
      email: email,
      password: password
    });
  }
  /**
   * Logout user, erase sessionStorage
   */
  logout() {
    this.isAuth = false;
    this.username = undefined;
    window.sessionStorage.clear()

  }
  /**
   * Register endpoint
   * @param username
   * @param password
   * @param email
   * @returns
   */
  register(username: string, password: string, email: string): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signup', {
      username: username,
      password: password,
      email: email
    });
  }
  /**
   * Check user authentication status
   */
  isAuthenticated(): boolean {
    return this.isAuth;
  }

  /**
   * Set user authentication status
   */
  setAuthenticated(auth: boolean) {
    this.isAuth = auth;
  }

  // Setter getter username
  setUsername(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }

  // Setter getter role
  getRole() {
    return this.role;
  }

  setRole(role: string) {
    this.role = role;
  }
}
