import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { IJuego, IDirector, IProductor, IProtagonista, ITecnologia } from '../../../../../core/models';
import { Validations } from '../../../../../core/utils';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil, startWith, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GeneralStoreState, GeneralStoreSelectors } from 'src/app/root-store/general-store';

@Component({
  selector: 'app-juego-form',
  templateUrl: './juego-form.component.html',
  styleUrls: ['./juego-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JuegoFormComponent implements OnInit, OnChanges, OnDestroy {

  @Input() juego: IJuego;
  @Input() textButton: String;
  @Input() title: String;
  @Output() save = new EventEmitter<IJuego>();

  unSubject$: Subject<any> = new Subject();
  directores$: Observable<IDirector[]> = of([]);
  productores$: Observable<IProductor[]> = of([]);
  protagonistas$: Observable<IProtagonista[]> = of([]);
  tecnologias$: Observable<ITecnologia[]> = of([]);

  fgJuego: FormGroup;
  directores: IDirector[] = [];
  productores: IProductor[] = [];
  protagonistas: IProtagonista[] = [];
  tecnologias: ITecnologia[] = [];

  constructor (
    private fb: FormBuilder,
    private store: Store<GeneralStoreState.GeneralState>,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.subcriptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['juego']) {
      if (changes['juego'].currentValue) this.fgJuego.patchValue({ ...this.juego });
    }
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    const control: AbstractControl = this.fgJuego.controls[controlName];

    if (!control) { return false; }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  onSubmit(): void {
    if (!this.fgJuego.valid) return;
    this.save.emit(this.fgJuego.value);
  }

  displayFnDirector(item: IDirector): string {
    return item && item.nombre ? item.nombre.toLocaleLowerCase() : undefined;
  }

  displayFnProductor(item: IProductor): string {
    return item && item.nombre ? item.nombre.toLocaleLowerCase() : undefined;
  }

  displayFnTecnologia(item: ITecnologia): string {
    return item && item.nombre ? item.nombre.toLocaleLowerCase() : undefined;
  }

  displayFnProtagonista(item: IProtagonista): string {
    return item && item.nombre ? item.nombre.toLocaleLowerCase() : undefined;
  }

  ngOnDestroy(): void {
    this.unSubject$.next();
    this.unSubject$.complete();
  }

  private createForm(): void {
    this.fgJuego = this.fb.group({
      id: [undefined],
      titulo: [undefined, [Validators.required]],
      precio: [undefined, [Validators.required]],
      ano: [undefined, [Validators.required]],
      disponible: [true, [Validators.required]],
      director: [undefined, [Validators.required, Validations.json(['id'])]],
      protagonista: [undefined, [Validators.required, Validations.json(['id'])]],
      productor: [undefined, [Validators.required, Validations.json(['id'])]],
      tecnologia: [undefined, [Validators.required, Validations.json(['id'])]],
    });
  }

  private subcriptions(): void {
    this.store.select(GeneralStoreSelectors.slGeneralDirectores)
      .pipe(takeUntil(this.unSubject$))
      .subscribe(directores => this.directores = directores);

    this.store.select(GeneralStoreSelectors.slGeneralProductores)
      .pipe(takeUntil(this.unSubject$))
      .subscribe(productores => this.productores = productores);

    this.store.select(GeneralStoreSelectors.slGeneralProtagonistas)
      .pipe(takeUntil(this.unSubject$))
      .subscribe(protagonistas => this.protagonistas = protagonistas);

    this.store.select(GeneralStoreSelectors.slGeneralTecnologias)
      .pipe(takeUntil(this.unSubject$))
      .subscribe(tecnologias => this.tecnologias = tecnologias);

    this.directores$ = this.fgJuego.controls['director'].valueChanges
      .pipe(
        takeUntil(this.unSubject$),
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterDirectores(name) : this.directores.slice(0, 5))
      );

    this.protagonistas$ = this.fgJuego.controls['protagonista'].valueChanges
      .pipe(
        takeUntil(this.unSubject$),
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterProtagonistas(name) : this.protagonistas.slice(0, 5))
      );

    this.productores$ = this.fgJuego.controls['productor'].valueChanges
      .pipe(
        takeUntil(this.unSubject$),
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterProductores(name) : this.productores.slice(0, 5))
      );

    this.tecnologias$ = this.fgJuego.controls['tecnologia'].valueChanges
      .pipe(
        takeUntil(this.unSubject$),
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterTecnologias(name) : this.tecnologias.slice(0, 5))
      );
  }

  private _filterDirectores(name: string): IDirector[] {
    const filterValue = name.toLowerCase();
    return this.directores.filter(option => option.nombre.toLocaleLowerCase().indexOf(filterValue) === 0);
  }

  private _filterProductores(name: string): IDirector[] {
    const filterValue = name.toLocaleLowerCase();
    return this.productores.filter(option => option.nombre.toLocaleLowerCase().indexOf(filterValue) === 0);
  }

  private _filterProtagonistas(name: string): IDirector[] {
    const filterValue = name.toLowerCase();
    return this.protagonistas.filter(option => option.nombre.toLocaleLowerCase().indexOf(filterValue) === 0);
  }

  private _filterTecnologias(name: string): IDirector[] {
    const filterValue = name.toLowerCase();
    return this.tecnologias.filter(option => option.nombre.toLocaleLowerCase().indexOf(filterValue) === 0);
  }
}
