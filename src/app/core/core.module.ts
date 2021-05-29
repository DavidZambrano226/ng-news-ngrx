import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterResolver } from './resolver/register.resolver';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './services/news/news.service';
import { RegisterService } from './services/register/register.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    RegisterResolver,
    NewsService,
    RegisterService
  ]
})
export class CoreModule { }
