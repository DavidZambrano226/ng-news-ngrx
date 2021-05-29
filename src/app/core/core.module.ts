import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterResolver } from './resolver/register.resolver';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    RegisterResolver
  ]
})
export class CoreModule { }
