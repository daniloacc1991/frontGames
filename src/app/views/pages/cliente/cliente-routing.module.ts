import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteNewComponent } from './components/cliente-new/cliente-new.component';

const routes: Routes = [
  {
    path: 'list',
    component: ClienteListComponent,
  },
  {
    path: 'new',
    component: ClienteNewComponent,
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
