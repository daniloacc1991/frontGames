import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Store, ActionsSubject } from '@ngrx/store';
import { Router } from '@angular/router';
import { takeUntil, distinctUntilChanged, map } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { AlertStoreState, AlertStoreActions } from '../../../root-store/alert-store';

@Component({
  selector: 'app-sweetalert',
  templateUrl: './sweetalert.component.html',
  styleUrls: ['./sweetalert.component.scss']
})
export class SweetalertComponent implements OnDestroy {

  private unSubject$ = new Subject();
  private path: string;

  @ViewChild('alertSwal', { static: true }) alertSwal: SwalComponent;

  constructor (
    private store: Store<AlertStoreState.AlertState>,
    private actionsSubject: ActionsSubject,
    private router: Router,
  ) {
    this.actionsSubject.pipe(
      takeUntil(this.unSubject$),
      ofType(AlertStoreActions.showAlert),
      distinctUntilChanged(),
      map(action => ({ options: action.options, path: action.path }))
    ).subscribe(({ options, path }) => {
      this.alertSwal.swalOptions = {
        ...options,
        willClose: () => {
          if (this.path) { this.router.navigate([this.path]); }
          this.store.dispatch(AlertStoreActions.showAlertClose());
        },
      };
      this.path = path;
      this.alertSwal.update();
      this.alertSwal.fire();
    });
  }

  ngOnDestroy(): void {
    this.unSubject$.next();
    this.unSubject$.unsubscribe();
  }

  hiddenSwal(): void {
    this.store.dispatch(AlertStoreActions.showAlertClose());
    if (this.path) { this.router.navigate([this.path]); }
  }

}
