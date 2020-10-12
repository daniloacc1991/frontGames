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
import { MatIconModule } from '@angular/material/icon';

import { CoreModule } from '../../../core/core.module';
import { JuegoStoreModule } from '../../../root-store/juego-store';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegoListComponent } from './components/juego-list/juego-list.component';
import { JuegoNewComponent } from './components/juego-new/juego-new.component';
import { JuegoFormComponent } from './components/juego-form/juego-form.component';
import { JuegoEditComponent } from './components/juego-edit/juego-edit.component';


@NgModule({
  declarations: [JuegoListComponent, JuegoNewComponent, JuegoFormComponent, JuegoEditComponent],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JuegoStoreModule,
    CoreModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
  ]
})
export class JuegosModule { }
