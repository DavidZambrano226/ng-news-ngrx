import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterResolver } from './core/resolver/register.resolver';
import { NewsComponent } from './pages/news/news.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
  {
    path: 'register',
    resolve: [RegisterResolver],
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: '/', 
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
