import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { JuegoService } from '../../core/services';
import * as JuegoStoreActions from './juego.actions';

@Injectable()
export class JuegoEffects {

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JuegoStoreActions.LoadAll),
      switchMap(() =>
        this.juegoService.findAll().pipe(
          map(items => JuegoStoreActions.LoadAllSuccess({ items })),
          catchError(err => {
            console.error(err);
            return of(JuegoStoreActions.Failure({ err: 'Error.... al intentar cargar los juegos' }));
          })
        )
      ),
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JuegoStoreActions.Load),
      map(action => action.id),
      switchMap(id =>
        this.juegoService.findOne(id).pipe(
          map(item => JuegoStoreActions.LoadSuccess({ item })),
          catchError(err => {
            console.error(err);
            return of(JuegoStoreActions.Failure({ err: 'Error.... al intentar cargar el juego' }));
          })
        )
      )
    ),
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JuegoStoreActions.Create),
      map(action => action.item),
      switchMap(item =>
        this.juegoService.create(item).pipe(
          map(item => JuegoStoreActions.CreateSuccess({ item })),
          catchError(err => {
            console.error(err);
            return of(JuegoStoreActions.Failure({ err: 'Error.... al intentar crear el juego' }));
          })
        )
      )
    ),
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JuegoStoreActions.Put),
      map(action => action.item),
      switchMap(item =>
        this.juegoService.update(item).pipe(
          map(item => JuegoStoreActions.PutSuccess({ item: { id: item.id, changes: item } })),
          catchError(err => {
            console.error(err);
            return of(JuegoStoreActions.Failure({ err: 'Error.... al intentar actualizar el juego' }));
          })
        )
      )
    ),
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JuegoStoreActions.Delete),
      map(action => action.id),
      switchMap(id =>
        this.juegoService.delete(id).pipe(
          map(id => JuegoStoreActions.DeleteSuccess({ id })),
          catchError(err => {
            console.error(err);
            return of(JuegoStoreActions.Failure({ err: 'Error.... al intentar eliminar el juego' }));
          })
        )
      )
    ),
  );

  constructor (
    private actions$: Actions,
    private juegoService: JuegoService,
  ) { }

}
