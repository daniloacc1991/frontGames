import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlquilerListComponent } from './components/alquiler-list/alquiler-list.component';
import { AlquilerNewComponent } from './components/alquiler-new/alquiler-new.component';

const routes: Routes = [
  {
    path: 'list',
    component: AlquilerListComponent,
  },
  {
    path: 'new',
    component: AlquilerNewComponent,
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquilerRoutingModule { }
