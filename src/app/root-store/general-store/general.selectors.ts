import { IDirector, IProductor, IProtagonista, ITecnologia } from '../../core/models';
import { GeneralState } from './general.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { generalFeatureKey } from './general.reducer';

export const getDirectores = (state: GeneralState): IDirector[] => state.directores;
export const getProductores = (state: GeneralState): IProductor[] => state.productores;
export const getProtagonistas = (state: GeneralState): IProtagonista[] => state.protagonistas;
export const getTecnologias = (state: GeneralState): ITecnologia[] => state.tecnologias;

export const slGeneralState = createFeatureSelector(generalFeatureKey);

export const slGeneralDirectores = createSelector(slGeneralState, getDirectores);
export const slGeneralProductores = createSelector(slGeneralState, getProductores);
export const slGeneralProtagonistas = createSelector(slGeneralState, getProtagonistas);
export const slGeneralTecnologias = createSelector(slGeneralState, getTecnologias);
