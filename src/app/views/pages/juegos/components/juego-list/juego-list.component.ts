import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { IJuego } from '../../../../../core/models';
import { JuegoStoreState, JuegoStoreActions, JuegoStoreSelectors } from '../../../../../root-store/juego-store';

@Component({
  selector: 'app-juego-list',
  templateUrl: './juego-list.component.html',
  styleUrls: ['./juego-list.component.scss']
})
export class JuegoListComponent implements OnInit, AfterViewInit, OnDestroy {

  unSubject$: Subject<any> = new Subject();
  displayedColumns: string[] = ['id', 'ano', 'titulo', 'tecnologia', 'productor', 'protagonista', 'director', 'precio', 'action'];
  dataSource: MatTableDataSource<IJuego> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor (
    private store: Store<JuegoStoreState.JuegoState>,
    private router: Router,
  ) {
    this.store.dispatch(JuegoStoreActions.LoadAll());
  }

  ngOnInit(): void {
    this.selectors();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  create(): void {
    this.router.navigate(['/juegos', 'new']);
  }

  edit(id: number): void {
    this.router.navigate(['/juegos', 'edit', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnDestroy() {
    this.unSubject$.next();
    this.unSubject$.complete();
  }

  private selectors(): void {
    this.store.select(JuegoStoreSelectors.slJuegoAll)
      .subscribe(juegos => {
        if (juegos.length > 0) this.dataSource.data = juegos;
      });
  }

}
