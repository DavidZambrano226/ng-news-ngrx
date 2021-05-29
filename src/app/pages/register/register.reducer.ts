import { createReducer, on } from '@ngrx/store';
import { IPrograms } from 'src/app/models/programs.model';
import * as registerActios from './register.action';

export interface State {
    programs: IPrograms[]
}

export const initialState: State = {
    programs: [],
}

const _registerReducer = createReducer(initialState, 
    on(registerActios.setPrograms, ( state, { programs } ) => ({...state, programs}))  
);


export function registerReducer( state: any, action: any ) {
    return _registerReducer(state, action);
}

