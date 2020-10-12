import { Action, createReducer, on } from '@ngrx/store';
import * as GeneralStoreActions from './general.actions';
import { GeneralState, initialGeneralState } from './general.state';

export const generalFeatureKey = 'general';

export const reducerGeneral = createReducer<GeneralState>(
  initialGeneralState,
  on(GeneralStoreActions.LoadAllDirector, (state) =>
    ({ ...state, directores: [] })),
  on(GeneralStoreActions.LoadAllDirectorSuccess, (state, { items }) =>
    ({ ...state, directores: items })),
  on(GeneralStoreActions.CreateDirectorSuccess, (state, { item }) => {
    const items = state.directores;
    items.push(item);
    return {
      ...state,
      directores: items,
    };
  }),

  on(GeneralStoreActions.LoadAllProductor, (state) =>
    ({ ...state, productores: [] })),
  on(GeneralStoreActions.LoadAllProductorSuccess, (state, { items }) =>
    ({ ...state, productores: items })),
  on(GeneralStoreActions.CreateProductorSuccess, (state, { item }) => {
    const items = state.productores;
    items.push(item);
    return {
      ...state,
      productores: items,
    };
  }),

  on(GeneralStoreActions.LoadAllProtagonista, (state) =>
    ({ ...state, protagonistas: [] })),
  on(GeneralStoreActions.LoadAllProtagonistaSuccess, (state, { items }) =>
    ({ ...state, protagonistas: items })),
  on(GeneralStoreActions.CreateProtagonistaSuccess, (state, { item }) => {
    const items = state.protagonistas;
    items.push(item);
    return {
      ...state,
      protagonistas: items,
    };
  }),

  on(GeneralStoreActions.LoadAllTecnologia, (state) =>
    ({ ...state, tecnologias: [] })),
  on(GeneralStoreActions.LoadAllTecnologiaSuccess, (state, { items }) =>
    ({ ...state, tecnologias: items })),
  on(GeneralStoreActions.CreateTecnologiaSuccess, (state, { item }) => {
    const items = state.tecnologias;
    items.push(item);
    return {
      ...state,
      tecnologias: items,
    };
  }),
);

export function reducer(state: GeneralState, action: Action) {
  return reducerGeneral(state, action);
}
