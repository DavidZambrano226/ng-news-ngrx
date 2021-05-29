import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPrograms } from '../../models/programs.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as registerActions from '../../pages/register/register.action';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterResolver implements Resolve<boolean> {

  see = new Set();

  constructor ( private http: HttpClient, private store: Store<AppState> ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url = `${environment.base_api}/programas`;
    this.http.get<IPrograms[]>(url).subscribe( (data: IPrograms[]) => {
      const arr = data.filter( (program: IPrograms) => {
        const duplicate = this.see.has(program.id);
        this.see.add(program.id);
        return !duplicate;
      });

      this.store.dispatch(registerActions.setPrograms({ programs: arr }));
      return of(true);  
    })
    return of(false);
  }
}
