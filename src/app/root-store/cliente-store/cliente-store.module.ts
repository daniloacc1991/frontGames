import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCliente from './cliente.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClienteEffects } from './cliente.effects';

import { ClienteService } from '../../core/services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCliente.clientesFeatureKey, fromCliente.reducer),
    EffectsModule.forFeature([ClienteEffects])
  ],
  providers: [ClienteService],
})
export class ClienteStoreModule { }
