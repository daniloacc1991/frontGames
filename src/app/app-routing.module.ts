import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'clientes',
    loadChildren: () => import('./views/pages/cliente/cliente.module').then(m => m.ClienteModule),
  },
  {
    path: 'juegos',
    loadChildren: () => import('./views/pages/juegos/juegos.module').then(m => m.JuegosModule),
  },
  {
    path: 'alquileres',
    loadChildren: () => import('./views/pages/alquiler/alquiler.module').then(m => m.AlquilerModule),
  },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
