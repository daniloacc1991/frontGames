import { juegoAdapter, JuegoState } from './juego.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { juegoesFeatureKey } from './juego.reducer';

export const getCurrentId = (state: JuegoState): number => state.currentId;
export const getIsLoading = (state: JuegoState): boolean => state.isLoading;
export const getError = (state: JuegoState): string => state.error;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = juegoAdapter.getSelectors();

export const slJuegoState = createFeatureSelector<JuegoState>(juegoesFeatureKey);

export const slJuegoCurrentId = createSelector(slJuegoState, getCurrentId);
export const slJuegoIsLoading = createSelector(slJuegoState, getIsLoading);
export const slJuegoError = createSelector(slJuegoState, getError);

export const slJuegoIds = createSelector(slJuegoState, selectIds);
export const slJuegoEntities = createSelector(slJuegoState, selectEntities);
export const slJuegoAll = createSelector(slJuegoState, selectAll);
export const slJuegoTotal = createSelector(slJuegoState, selectTotal);
export const slJuegoCurrent = createSelector(slJuegoEntities, slJuegoCurrentId, (entities, id) => id && entities[id]);
