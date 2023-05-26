import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string= "api-farfaraway-back-production.up.railway.app"
  constructor(private httpClient:HttpClient) { }

  // Get list
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }


  getItem(id: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/clientes/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  create(data: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, data).pipe(
      catchError(this.handleError)
    );
  }
  update(id:any, data:any): Observable<any> {
    return this.httpClient.put(this.apiUrl + `/${id}`, data).pipe(
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id: any): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  getByName(name: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?name_like=${name}`).pipe(

    )
  }

  getBySurname(surname: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?surname_like=${surname}`).pipe(

    )
  }
  getByEmail(email: any): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?email_like=${email}`).pipe(

    )
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Here you have an error ', error.error.message)
    } else {
      console.error(
        `Backend  returned code ${error.status},
        body was: ${error.error}`
      )
    }
    return throwError(() => new Error('Ha ocurrido un error, intentelo de nuevo más tarde.'));
  }
}
