import { createAction, props } from '@ngrx/store';
import { INew } from '../../models/new.model';

export const setNews = createAction(
    '[News] setNew',
    props<{ news: INew[] }>()
);