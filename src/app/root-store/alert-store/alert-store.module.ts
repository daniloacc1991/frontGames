import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './alert.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AlertEffect } from './alert.effects';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature('alert', reducer),
		EffectsModule.forFeature([AlertEffect]),
	]
})
export class AlertStoreModule { }
