import { Action, createReducer, on } from '@ngrx/store';
import { JuegoState, initialJuegoState, juegoAdapter } from './juego.state';
import * as JuegoStoreActions from './juego.actions';

export const juegoesFeatureKey = 'juegos';

export const reducerJuegos = createReducer<JuegoState>(
  initialJuegoState,
  on(JuegoStoreActions.LoadAll, (state) =>
    ({ ...state, isLoading: true, error: undefined })),
  on(JuegoStoreActions.LoadAllSuccess, (state, { items }) =>
    juegoAdapter.addAll(items, { ...state, isLoading: false })),
  on(JuegoStoreActions.Load, (state) =>
    ({ ...state, isLoading: true, error: undefined })),
  on(JuegoStoreActions.LoadSuccess, (state, { item }) =>
    juegoAdapter.upsertOne(item, { ...state, isLoading: false })),
  on(JuegoStoreActions.Create, (state) =>
    ({ ...state, isLoading: true, error: undefined })),
  on(JuegoStoreActions.CreateSuccess, (state, { item }) =>
    juegoAdapter.upsertOne(item, { ...state, isLoading: false })),
  on(JuegoStoreActions.Put, (state) =>
    ({ ...state, isLoading: true, error: undefined })),
  on(JuegoStoreActions.PutSuccess, (state, { item }) =>
    juegoAdapter.updateOne(item, { ...state, isLoading: false })),
  on(JuegoStoreActions.Delete, (state) =>
    ({ ...state, isLoading: true, error: undefined })),
  on(JuegoStoreActions.DeleteSuccess, (state, { id }) =>
    juegoAdapter.removeOne(id, { ...state, isLoading: false })),
  on(JuegoStoreActions.Clear, () =>
    juegoAdapter.removeAll(initialJuegoState)),
  on(JuegoStoreActions.Failure, (state, { err }) =>
    ({ ...state, isLoading: false, error: err })),
);

export function reducer(state: JuegoState, action: Action) {
  return reducerJuegos(state, action);
}
