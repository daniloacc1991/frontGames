import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromRouter from '@ngrx/router-store';
// Env
import { environment } from '../../environments/environment';
// NgRX

export interface AppState {
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state: AppState, action: any) => {
    console.log('State', state);
    console.log('Action', action);
    return reducer(state, action);
  };
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  const config: LocalStorageConfig = {
    keys: ['clientes'],
    rehydrate: true,
    removeOnUndefined: true,
  };
  return localStorageSync(config)(reducer);
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze, logger, localStorageSyncReducer] : [localStorageSyncReducer];
