import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPrograms } from '../../models/programs.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterResolver implements Resolve<IPrograms[]> {

  constructor ( private http: HttpClient ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPrograms[]> {
    const url = `https://cms.qailumno.com/servicios/programas`;
    const response = this.http.get<IPrograms[]>(url);
    console.log('I am a resolver');
    console.log(response);
    return response;
  }
}
