import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GeneralStoreActions from './general.actions';

import { GeneralService } from '../../core/services';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GeneralEffects {

  loadAllDirector$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneralStoreActions.LoadAllDirector),
      switchMap(() =>
        this.generalService.findAllDirector().pipe(
          map(items => GeneralStoreActions.LoadAllDirectorSuccess({ items })),
          catchError(err => {
            console.error(err);
            return of(GeneralStoreActions.Failure());
          })
        )
      ),
    )
  );


  createDirector$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneralStoreActions.CreateDirector),
      map(action => action.item),
      switchMap(item =>
        this.generalService.createDirector(item).pipe(
          map(item => GeneralStoreActions.CreateDirectorSuccess({ item })),
          catchError(err => {
            console.error(err);
            return of(GeneralStoreActions.Failure());
          })
        )
      )
    ),
  );

  loadAllProductor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneralStoreActions.LoadAllProductor),
      switchMap(() =>
        this.generalService.findAllProductor().pipe(
          map(items => GeneralStoreActions.LoadAllProductorSuccess({ items })),
          catchError(err => {
            console.error(err);
            return of(GeneralStoreActions.Failure());
          })
        )
      ),
    )
  );


  createProductor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneralStoreActions.CreateProductor),
      map(action => action.item),
      switchMap(item =>
        this.generalService.createProductor(item).pipe(
          map(item => GeneralStoreActions.CreateProductorSuccess({ item })),
          catchError(err => {
            console.error(err);
            return of(GeneralStoreActions.Failure());
          })
        )
      )
    ),
  );

  loadAllProtagonista$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneralStoreActions.LoadAllProtagonista),
      switchMap(() =>
        this.generalService.findAllProtagonista().pipe(
          map(items => GeneralStoreActions.LoadAllProtagonistaSuccess({ items })),
          catchError(err => {
            console.error(err);
            return of(GeneralStoreActions.Failure());
          })
        )
      ),
    )
  );


  createProtagonista$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneralStoreActions.CreateProtagonista),
      map(action => action.item),
      switchMap(item =>
        this.generalService.createProtagonista(item).pipe(
          map(item => GeneralStoreActions.CreateProtagonistaSuccess({ item })),
          catchError(err => {
            console.error(err);
            return of(GeneralStoreActions.Failure());
          })
        )
      )
    ),
  );

  loadAllTecnologia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneralStoreActions.LoadAllTecnologia),
      switchMap(() =>
        this.generalService.findAllTecnologia().pipe(
          map(items => GeneralStoreActions.LoadAllTecnologiaSuccess({ items })),
          catchError(err => {
            console.error(err);
            return of(GeneralStoreActions.Failure());
          })
        )
      ),
    )
  );


  createTecnologia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GeneralStoreActions.CreateTecnologia),
      map(action => action.item),
      switchMap(item =>
        this.generalService.createTecnologia(item).pipe(
          map(item => GeneralStoreActions.CreateTecnologiaSuccess({ item })),
          catchError(err => {
            console.error(err);
            return of(GeneralStoreActions.Failure());
          })
        )
      )
    ),
  );

  constructor (
    private actions$: Actions,
    private generalService: GeneralService,
  ) { }

}
