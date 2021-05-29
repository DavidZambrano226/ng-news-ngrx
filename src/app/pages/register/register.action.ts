import { createAction, props } from '@ngrx/store';
import { IPrograms } from '../../models/programs.model';


export const setPrograms = createAction(
    '[Register] setPrograms',
    props<{ programs: IPrograms[] }>()
);