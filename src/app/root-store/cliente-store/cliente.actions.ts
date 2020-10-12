import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ICliente } from '../../core/models';

export const LoadAll = createAction(
  '[Cliente/API] Load All',
);
export const LoadAllSuccess = createAction(
  '[Cliente/API] Load All Success',
  props<{ clientes: ICliente[]; }>()
);

export const Create = createAction(
  '[Cliente/API] Create',
  props<{ cliente: ICliente; }>()
);
export const CreateSuccess = createAction(
  '[Cliente/API] Create Success',
  props<{ cliente: ICliente; }>()
);

export const Load = createAction(
  '[Cliente/API] Load',
  props<{ id: number; }>()
);
export const LoadSuccess = createAction(
  '[Cliente/API] Load Success',
  props<{ cliente: ICliente; }>()
);

export const Put = createAction(
  '[Cliente/API] Put',
  props<{ cliente: ICliente; }>()
);
export const PutSuccess = createAction(
  '[Cliente/API] Put Success',
  props<{ cliente: Update<ICliente>; }>()
);


export const Delete = createAction(
  '[Cliente/API] Delete',
  props<{ id: number; }>()
);
export const DeleteSuccess = createAction(
  '[Cliente/API] Delete Success',
  props<{ id: number; }>()
);

export const Clear = createAction(
  '[Cliente/API] Clear'
);

export const Failure = createAction(
  '[Cliente/API] Failure',
  props<{ err: string; }>(),
);
