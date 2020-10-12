import { createFeatureSelector } from '@ngrx/store';
import { AlertState } from './alert.state';

export const slGeneralState = createFeatureSelector<AlertState>('alert');
