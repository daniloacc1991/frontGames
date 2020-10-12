import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RootStoreModule } from './root-store/root-store.module';
import { ThemeModule } from "./views/theme/theme.module";
import { HttpClientModule } from '@angular/common/http';

export function provideSwal() {
  return import('sweetalert2').then(({ default: Swal }) => Swal.mixin({
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Aceptar',
  }));
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ThemeModule,
    RootStoreModule,
    SweetAlert2Module.forRoot({ provideSwal }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
