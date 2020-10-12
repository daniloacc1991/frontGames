import { SweetAlertOptions } from 'sweetalert2';

export interface AlertState {
	options: SweetAlertOptions;
	path: string;
}

export const initialAlertState: AlertState = {
	options: undefined,
	path: undefined,
};
