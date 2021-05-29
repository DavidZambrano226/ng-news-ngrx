import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { NewsService } from 'src/app/core/services/news/news.service';
import { Store } from '@ngrx/store';
import { INew } from '../../models/new.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsData: INew[] = [];

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('news').subscribe( ({news}) => this.newsData = news);
  }

}
