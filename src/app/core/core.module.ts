import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';

const PIPES = [
  CapitalizePipe,
];

@NgModule({
  declarations: [
    ...PIPES,
  ],
  exports: [
    ...PIPES,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
