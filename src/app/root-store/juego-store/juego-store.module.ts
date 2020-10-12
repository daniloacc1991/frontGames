import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromJuego from './juego.reducer';
import { EffectsModule } from '@ngrx/effects';
import { JuegoEffects } from './juego.effects';

import { JuegoService } from '../../core/services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromJuego.juegoesFeatureKey, fromJuego.reducer),
    EffectsModule.forFeature([JuegoEffects])
  ],
  providers: [JuegoService]
})
export class JuegoStoreModule { }
