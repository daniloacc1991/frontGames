import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ClienteStoreState, ClienteStoreActions } from 'src/app/root-store/cliente-store';
import { Store, ActionsSubject } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';
import { AlertStoreActions } from 'src/app/root-store/alert-store';

@Component({
  selector: 'app-cliente-new',
  templateUrl: './cliente-new.component.html',
  styleUrls: ['./cliente-new.component.scss']
})
export class ClienteNewComponent implements OnInit, OnDestroy {

  unSubject$: Subject<any> = new Subject();

  fgCliente: FormGroup;

  constructor (
    private fb: FormBuilder,
    private store: Store<ClienteStoreState.ClienteState>,
    private actionsSubject: ActionsSubject,
  ) {
    this.createForm();
    this.subcriptions();
  }

  ngOnInit(): void {
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control: AbstractControl = this.fgCliente.controls[controlName];

    if (!control) { return false; }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  onSubmit(): void {
    if (!this.fgCliente.valid) return;
    this.store.dispatch(ClienteStoreActions.Create({ cliente: this.fgCliente.value }));
  }

  ngOnDestroy(): void {
    this.unSubject$.next();
    this.unSubject$.complete();
  }

  private createForm(): void {
    this.fgCliente = this.fb.group({
      nombre: [undefined, [Validators.required]],
      apellido: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]],
      telefono: [undefined, [Validators.required]],
    });
  }

  private subcriptions(): void {
    this.actionsSubject
      .pipe(
        takeUntil(this.unSubject$),
        ofType(ClienteStoreActions.CreateSuccess),
        map(action => action.cliente),
      )
      .subscribe(cliente => {
        this.store.dispatch(AlertStoreActions.showAlert({
          options: { text: 'Se realizó la creación del cliente satisfactoriamente', icon: 'success' },
          path: '/clientes',
        }));
      });
  }

}
