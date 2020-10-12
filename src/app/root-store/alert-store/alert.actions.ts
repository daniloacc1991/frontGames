import { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';
import { createAction, props } from '@ngrx/store';

export const showAlert = createAction(
	'[Alert] Show Alert',
	props<{ options: SweetAlertOptions, path?: string }>(),
);

export const showAlertClose = createAction(
	'[Alert] Show Alert Success',
);
