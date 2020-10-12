import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store, ActionsSubject } from '@ngrx/store';
import { JuegoStoreState, JuegoStoreActions, JuegoStoreSelectors } from 'src/app/root-store/juego-store';
import { IJuego } from 'src/app/core/models';
import { takeUntil, map } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { AlertStoreActions } from 'src/app/root-store/alert-store';

@Component({
  selector: 'app-juego-edit',
  templateUrl: './juego-edit.component.html',
  styleUrls: ['./juego-edit.component.scss']
})
export class JuegoEditComponent implements OnDestroy {

  unSubject$: Subject<any> = new Subject();

  juego: IJuego;

  constructor (
    private store: Store<JuegoStoreState.JuegoState>,
    private actionsSubject: ActionsSubject,
  ) {
    this.subcriptions();
  }

  save(item: IJuego) {
    this.store.dispatch(JuegoStoreActions.Put({ item }));
  }

  ngOnDestroy(): void {
    this.unSubject$.next();
    this.unSubject$.complete();
  }

  private subcriptions(): void {
    this.store.select(JuegoStoreSelectors.slJuegoCurrent)
      .pipe(takeUntil(this.unSubject$))
      .subscribe(juego => { if (juego) this.juego = juego; });

    this.actionsSubject
      .pipe(
        takeUntil(this.unSubject$),
        ofType(JuegoStoreActions.PutSuccess),
        map(action => action.item)
      )
      .subscribe(item => {
        this.store.dispatch(AlertStoreActions.showAlert({
          options: { text: `El juego ${item.changes.titulo}, fue actualizado satisfactoriamente`, icon: 'success' },
          path: '/juegos'
        }));
      });

    this.actionsSubject
      .pipe(
        takeUntil(this.unSubject$),
        ofType(JuegoStoreActions.Failure),
        map(action => action.err)
      )
      .subscribe(err => {
        this.store.dispatch(AlertStoreActions.showAlert({
          options: { text: err, icon: 'error' },
        }));
      });
  }

}
