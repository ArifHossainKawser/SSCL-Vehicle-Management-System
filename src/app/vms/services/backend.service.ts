import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8080';
  auth_token?: string ;

  authenticate(email: string, password: string): Observable<boolean>{
     return this.http.post<any>(`${this.baseUrl}/api/v1/auth/authenticate`, {email:email, password:password}).pipe(map(response => {
      this.auth_token = response.token;
      console.log(response);
      if(this.auth_token != null){
        console.log("Got authentication response.");
        return true;
      }else{
        return false;
      }

    }));
  }

  get authenticated(): boolean {
    return this.auth_token != null;
  }

  clear() {
    this.auth_token = undefined;
  }

}
