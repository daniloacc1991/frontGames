import { createAction, props } from '@ngrx/store';
import { IDirector, IProductor, IProtagonista, ITecnologia } from '../../core/models';

export const LoadAllDirector = createAction(
  '[General/API] Load All Director',
);
export const LoadAllDirectorSuccess = createAction(
  '[General/API] Load All Director Success',
  props<{ items: IDirector[]; }>()
);

export const CreateDirector = createAction(
  '[General/API] Create Director',
  props<{ item: IDirector; }>(),
);
export const CreateDirectorSuccess = createAction(
  '[General/API] Create Director Success',
  props<{ item: IDirector; }>(),
);

export const LoadAllProductor = createAction(
  '[General/API] Load All Productor',
);
export const LoadAllProductorSuccess = createAction(
  '[General/API] Load All Productor Success',
  props<{ items: IProductor[]; }>()
);

export const CreateProductor = createAction(
  '[General/API] Create Productor',
  props<{ item: IProductor; }>(),
);
export const CreateProductorSuccess = createAction(
  '[General/API] Create Productor Success',
  props<{ item: IProductor; }>(),
);

export const LoadAllProtagonista = createAction(
  '[General/API] Load All Protagonista',
);
export const LoadAllProtagonistaSuccess = createAction(
  '[General/API] Load All Protagonista Success',
  props<{ items: IProtagonista[]; }>()
);

export const CreateProtagonista = createAction(
  '[General/API] Create Protagonista',
  props<{ item: IProtagonista; }>(),
);
export const CreateProtagonistaSuccess = createAction(
  '[General/API] Create Protagonista Success',
  props<{ item: IProtagonista; }>(),
);

export const LoadAllTecnologia = createAction(
  '[General/API] Load All Tecnologia',
);
export const LoadAllTecnologiaSuccess = createAction(
  '[General/API] Load All Tecnologia Success',
  props<{ items: ITecnologia[]; }>()
);

export const CreateTecnologia = createAction(
  '[General/API] Create Tecnologia',
  props<{ item: ITecnologia; }>(),
);
export const CreateTecnologiaSuccess = createAction(
  '[General/API] Create Tecnologia Success',
  props<{ item: ITecnologia; }>()
);

export const Failure = createAction(
  '[General/API] Failure',
);
