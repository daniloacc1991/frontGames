import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'clientes',
        loadChildren: () => import('./views/pages/cliente/cliente.module').then(m => m.ClienteModule),
      },
      {
        path: 'juegos',
        loadChildren: () => import('./views/pages/juegos/juegos.module').then(m => m.JuegosModule),
      }
    ],
  },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
