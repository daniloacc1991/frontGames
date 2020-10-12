import { Action, createReducer, on } from '@ngrx/store';
import { AlertState, initialAlertState } from './alert.state';
import * as fromActions from './alert.actions';

const alertReducer = createReducer<AlertState>(
  initialAlertState,
  on(fromActions.showAlert, (state, { options, path }) => ({ ...state, options, path })),
  on(fromActions.showAlertClose, () => ({ ...initialAlertState })),
);

export function reducer(state: AlertState | undefined, action: Action) {
  return alertReducer(state, action);
}
