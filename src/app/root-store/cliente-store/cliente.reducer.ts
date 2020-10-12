import { Action, createReducer, on } from '@ngrx/store';
import * as ClienteStoreActions from './cliente.actions';
import { ClienteState, initialClienteState, clienteAdapter } from './cliente.state';

export const clientesFeatureKey = 'clientes';

export const reducerCliente = createReducer<ClienteState>(
  initialClienteState,
  on(ClienteStoreActions.LoadAll, (state) =>
    ({ ...state, isLoading: true, error: undefined })),
  on(ClienteStoreActions.LoadAllSuccess, (state, { clientes }) =>
    clienteAdapter.addAll(clientes, { ...state, isLoading: false })),
  on(ClienteStoreActions.Load, (state) =>
    ({ ...state, isLoading: true, error: undefined })),
  on(ClienteStoreActions.LoadSuccess, (state, { cliente }) =>
    clienteAdapter.upsertOne(cliente, { ...state, isLoading: false })),
  on(ClienteStoreActions.Create, (state) =>
    ({ ...state, isLoading: true, error: undefined })),
  on(ClienteStoreActions.CreateSuccess, (state, { cliente }) =>
    clienteAdapter.upsertOne(cliente, { ...state, isLoading: false })),
  on(ClienteStoreActions.Put, (state) =>
    ({ ...state, isLoading: true, error: undefined })),
  on(ClienteStoreActions.PutSuccess, (state, { cliente }) =>
    clienteAdapter.updateOne(cliente, { ...state, isLoading: false })),
  on(ClienteStoreActions.Delete, (state) =>
    ({ ...state, isLoading: true, error: undefined })),
  on(ClienteStoreActions.DeleteSuccess, (state, { id }) =>
    clienteAdapter.removeOne(id, { ...state, isLoading: false })),
  on(ClienteStoreActions.Clear, () =>
    clienteAdapter.removeAll(initialClienteState)),
  on(ClienteStoreActions.Failure, (state, { err }) =>
    ({ ...state, isLoading: false, error: err })),
);

export function reducer(state: ClienteState, action: Action) {
  return reducerCliente(state, action);
}
