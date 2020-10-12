import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GeneralEffects } from './general.effects';
import * as GeneralStoreReducer from './general.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(GeneralStoreReducer.generalFeatureKey, GeneralStoreReducer.reducer),
    EffectsModule.forFeature([GeneralEffects])
  ]
})
export class GeneralStoreModule { }
