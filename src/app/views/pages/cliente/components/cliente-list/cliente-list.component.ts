import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { ICliente } from '../../../../../core/models';
import { ClienteStoreState, ClienteStoreActions, ClienteStoreSelectors } from '../../../../../root-store/cliente-store';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit, AfterViewInit, OnDestroy {

  unSubject$: Subject<any> = new Subject();
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'telefono'];
  dataSource: MatTableDataSource<ICliente> = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor (
    private store: Store<ClienteStoreState.ClienteState>,
    private router: Router,
  ) {
    this.store.dispatch(ClienteStoreActions.LoadAll());
  }

  ngOnInit(): void {
    this.selectors();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  create(): void {
    this.router.navigate(['/clientes', 'new']);
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
    this.store.select(ClienteStoreSelectors.slClienteAll)
      .subscribe(clientes => {
        if (clientes.length > 0) this.dataSource.data = clientes;
      });
  }

}
