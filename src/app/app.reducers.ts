import { ActionReducerMap } from '@ngrx/store';
import * as news from './pages/news/news.reducer';
import * as register from './pages/register/register.reducer';



export interface AppState {
   news: news.State;
   register: register.State
}



export const appReducers: ActionReducerMap<AppState> = {
   news: news.newReducer,
   register: register.registerReducer
};