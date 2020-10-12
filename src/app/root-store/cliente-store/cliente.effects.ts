import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ClienteStoreActions from './cliente.actions';

import { ClienteService } from '../../core/services';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ClienteEffects {

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteStoreActions.LoadAll),
      switchMap(() =>
        this.clienteService.findAll().pipe(
          map(clientes => ClienteStoreActions.LoadAllSuccess({ clientes })),
          catchError(err => {
            console.error(err);
            return of(ClienteStoreActions.Failure({ err: 'Error.... al intentar cargar los clientes' }));
          })
        )
      ),
    )
  );

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteStoreActions.Load),
      map(action => action.id),
      switchMap(id =>
        this.clienteService.findOne(id).pipe(
          map(cliente => ClienteStoreActions.LoadSuccess({ cliente })),
          catchError(err => {
            console.error(err);
            return of(ClienteStoreActions.Failure({ err: 'Error.... al intentar cargar el cliente' }));
          })
        )
      )
    ),
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteStoreActions.Create),
      map(action => action.cliente),
      switchMap(item =>
        this.clienteService.create(item).pipe(
          map(cliente => ClienteStoreActions.CreateSuccess({ cliente })),
          catchError(err => {
            console.error(err);
            return of(ClienteStoreActions.Failure({ err: 'Error.... al intentar crear el cliente' }));
          })
        )
      )
    ),
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteStoreActions.Put),
      map(action => action.cliente),
      switchMap(item =>
        this.clienteService.update(item).pipe(
          map(cliente => ClienteStoreActions.PutSuccess({ cliente: { id: cliente.id, changes: cliente } })),
          catchError(err => {
            console.error(err);
            return of(ClienteStoreActions.Failure({ err: 'Error.... al intentar actualizar el cliente' }));
          })
        )
      )
    ),
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClienteStoreActions.Delete),
      map(action => action.id),
      switchMap(id =>
        this.clienteService.delete(id).pipe(
          map(id => ClienteStoreActions.DeleteSuccess({ id })),
          catchError(err => {
            console.error(err);
            return of(ClienteStoreActions.Failure({ err: 'Error.... al intentar eliminar el cliente' }));
          })
        )
      )
    ),
  );

  constructor (
    private actions$: Actions,
    private clienteService: ClienteService,
  ) { }

}
