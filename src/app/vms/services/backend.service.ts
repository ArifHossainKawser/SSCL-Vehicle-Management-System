import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8080';
  auth_token?: string ;
  auth_role: string = '';

  authenticate(email: string, password: string): Observable<string>{
     return this.http.post<any>(`${this.baseUrl}/api/v1/auth/authenticate`, {email:email, password:password}).pipe(map(response => {
      if(response != null){
        this.auth_token = response.token;
        this.auth_role = response.role;
        console.log(this.auth_token);


        return this.auth_role;
      }
      return this.auth_role;
    }));
  }

  get authenticated(): boolean {
    return this.auth_token != null;
  }

  clear() {
    this.auth_token = undefined;
  }

  private getOptions(){
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
      })
    }
  }

  //.........................................Vehicles Section ..................................................

    AddVehicle(vehicle: Vehicle) : Observable<Vehicle>{
      return this.http.post<Vehicle>(`${this.baseUrl}/vehicle/save`, vehicle, this.getOptions());
    }

}
