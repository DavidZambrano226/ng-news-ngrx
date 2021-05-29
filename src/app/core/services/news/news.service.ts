import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { INew } from 'src/app/models/new.model';
import { environment } from '../../../../environments/environment';
import { AppState } from '../../../app.reducers';
import * as newActios from '../../../pages/news/news.action';

@Injectable({
  providedIn: 'root'
})
export class NewsService { 

  constructor( private http: HttpClient, private store: Store<AppState> ) { }

  getAllNews() {
    const url = `${environment.base_api}/noticias`;
    this.http.get<INew[]>(url).subscribe( resp =>  {
      this.store.dispatch( newActios.setNews( {news: resp} ) )
    } );
  }
}
