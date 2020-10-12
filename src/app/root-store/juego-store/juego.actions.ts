import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IJuego } from '../../core/models';

export const LoadAll = createAction(
  '[Juego/API] Load All',
);
export const LoadAllSuccess = createAction(
  '[Juego/API] Load All Success',
  props<{ items: IJuego[]; }>()
);

export const Create = createAction(
  '[Juego/API] Create',
  props<{ item: IJuego; }>()
);
export const CreateSuccess = createAction(
  '[Juego/API] Create Success',
  props<{ item: IJuego; }>()
);

export const Load = createAction(
  '[Juego/API] Load',
  props<{ id: number; }>()
);
export const LoadSuccess = createAction(
  '[Juego/API] Load Success',
  props<{ item: IJuego; }>()
);

export const Put = createAction(
  '[Juego/API] Put',
  props<{ item: IJuego; }>()
);
export const PutSuccess = createAction(
  '[Juego/API] Put Success',
  props<{ item: Update<IJuego>; }>()
);


export const Delete = createAction(
  '[Juego/API] Delete',
  props<{ id: number; }>()
);
export const DeleteSuccess = createAction(
  '[Juego/API] Delete Success',
  props<{ id: number; }>()
);

export const Clear = createAction(
  '[Juego/API] Clear'
);

export const Failure = createAction(
  '[Juego/API] Failure',
  props<{ err: string; }>(),
);
