import { clienteAdapter, ClienteState } from './cliente.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { clientesFeatureKey } from './cliente.reducer';

export const getCurrentId = (state: ClienteState): number => state.currentId;
export const getIsLoading = (state: ClienteState): boolean => state.isLoading;
export const getError = (state: ClienteState): string => state.error;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = clienteAdapter.getSelectors();

export const slClienteState = createFeatureSelector<ClienteState>(clientesFeatureKey);

export const slClienteCurrentId = createSelector(slClienteState, getCurrentId);
export const slClienteIsLoading = createSelector(slClienteState, getIsLoading);
export const slClienteError = createSelector(slClienteState, getError);

export const slClienteIds = createSelector(slClienteState, selectIds);
export const slClienteEntities = createSelector(slClienteState, selectEntities);
export const slClienteAll = createSelector(slClienteState, selectAll);
export const slClienteTotal = createSelector(slClienteState, selectTotal);
export const slClienteCurrent = createSelector(slClienteEntities, slClienteCurrentId, (entities, id) => id && entities[id]);
