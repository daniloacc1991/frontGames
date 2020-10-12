import { Component, OnDestroy } from '@angular/core';
import { Store, ActionsSubject } from '@ngrx/store';
import { Subject } from 'rxjs';
import { IJuego } from '../../../../../core/models';
import { JuegoStoreState, JuegoStoreActions } from 'src/app/root-store/juego-store';
import { takeUntil, map } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { AlertStoreActions } from 'src/app/root-store/alert-store';

@Component({
  selector: 'app-juego-new',
  templateUrl: './juego-new.component.html',
  styleUrls: ['./juego-new.component.scss'],
})
export class JuegoNewComponent implements OnDestroy {

  unSubject$: Subject<any> = new Subject();

  constructor (
    private store: Store<JuegoStoreState.JuegoState>,
    private actionsSubject: ActionsSubject,
  ) {
    this.subcriptions();
  }

  save(item: IJuego) {
    this.store.dispatch(JuegoStoreActions.Create({ item }));
  }

  ngOnDestroy(): void {
    this.unSubject$.next();
    this.unSubject$.complete();
  }

  private subcriptions(): void {
    this.actionsSubject
      .pipe(
        takeUntil(this.unSubject$),
        ofType(JuegoStoreActions.CreateSuccess),
        map(action => action.item)
      )
      .subscribe(item => {
        this.store.dispatch(AlertStoreActions.showAlert({
          options: { text: `El juego ${item.titulo}, fue creado satisfactoriamente`, icon: 'success' },
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
