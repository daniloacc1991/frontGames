import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// NgRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from 'src/environments/environment';
// RootStore
import { reducers, metaReducers } from './root-state';
import { CustomSerializer } from './custom-route-serializer';
import { AlertStoreModule } from './alert-store';
import { GeneralStoreModule } from './general-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    AlertStoreModule,
    GeneralStoreModule,
  ]
})
export class RootStoreModule { }
