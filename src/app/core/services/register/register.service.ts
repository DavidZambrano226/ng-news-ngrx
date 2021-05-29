import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http: HttpClient ) { }

  saveRegister( user: any ) {
    const url = `${environment.base_api}/registro`;

    return this.http.post(url, user);
  }
}
