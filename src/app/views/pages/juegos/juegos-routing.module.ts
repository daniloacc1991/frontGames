import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegoListComponent } from './components/juego-list/juego-list.component';
import { JuegoNewComponent } from './components/juego-new/juego-new.component';
import { JuegoEditComponent } from './components/juego-edit/juego-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: JuegoListComponent,
  },
  {
    path: 'new',
    component: JuegoNewComponent,
  },
  {
    path: 'edit/:id',
    component: JuegoEditComponent,
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
