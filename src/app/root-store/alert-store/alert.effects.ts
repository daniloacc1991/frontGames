import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromActions from './alert.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class AlertEffect {

	constructor(
		private actions$: Actions,
	) { }

}
