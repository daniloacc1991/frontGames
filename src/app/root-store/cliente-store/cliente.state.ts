import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ICliente } from '../../core/models';

export interface ClienteState extends EntityState<ICliente> {
  currentId: number;
  isLoading: boolean;
  error: string;
}

export const clienteAdapter: EntityAdapter<ICliente> = createEntityAdapter<ICliente>();

export const initialClienteState: ClienteState = clienteAdapter.getInitialState({
  currentId: undefined,
  isLoading: false,
  error: undefined,
});
