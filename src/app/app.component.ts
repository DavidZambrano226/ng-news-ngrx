import { Component } from '@angular/core';
import { NewsService } from './core/services/news/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-news-redux';
  constructor(private newsService: NewsService) {
    this.newsService.getAllNews();
  }
}
