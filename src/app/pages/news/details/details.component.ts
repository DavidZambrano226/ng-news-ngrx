import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '../../../app.reducers';
import { INew } from '../../../models/new.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, DoCheck {

  idNew: string = "";
  news: INew[] = [];
  newDetail: INew | any = {};

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    const {id} = this.route.snapshot.params;
    this.idNew = id;   
  }

  ngDoCheck(): void {
    this.getNewDetail(this.idNew);
  }

  ngOnInit(): void {
    this.store.select('news').subscribe( ({news}) => {
      this.news = news;
    })
  }

  getNewDetail(id: string): void {
    if(!!this.news && this.news.length > 0) {
      this.newDetail = this.news.find((news: INew) => news.id === id);
    }
  }

}
