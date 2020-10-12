import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IJuego } from '../../core/models';

export interface JuegoState extends EntityState<IJuego> {
  currentId: number,
  isLoading: boolean;
  error: string;
}

export const juegoAdapter: EntityAdapter<IJuego> = createEntityAdapter<IJuego>();

export const initialJuegoState: JuegoState = juegoAdapter.getInitialState({
  currentId: undefined,
  isLoading: false,
  error: undefined,
});
