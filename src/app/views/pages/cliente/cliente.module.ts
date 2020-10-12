import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteStoreModule } from '../../../root-store/cliente-store';
import { ClienteNewComponent } from './components/cliente-new/cliente-new.component';


@NgModule({
  declarations: [ClienteListComponent, ClienteNewComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClienteStoreModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class ClienteModule { }
