import { createReducer, on } from '@ngrx/store';

import * as newActios from './news.action';
import { INew } from '../../models/new.model';

export interface State {
    news: INew[]; 
}

export const initialState: State = {
   news: [],
}

const _newReducer = createReducer(initialState,
    on(newActios.setNews, ( state, { news } ) =>  ({...state, news})),
);

export function newReducer(state: any, action: any) {
    return _newReducer(state, action);
}