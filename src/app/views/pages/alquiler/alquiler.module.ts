import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquilerRoutingModule } from './alquiler-routing.module';
import { AlquilerListComponent } from './components/alquiler-list/alquiler-list.component';
import { AlquilerNewComponent } from './components/alquiler-new/alquiler-new.component';


@NgModule({
  declarations: [AlquilerListComponent, AlquilerNewComponent],
  imports: [
    CommonModule,
    AlquilerRoutingModule
  ]
})
export class AlquilerModule { }
