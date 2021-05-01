import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientFunction, FunctionProviderModule } from 'mam-core';
import { ApertureFunction } from './aperture-function';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ApertureFunctionsModule implements FunctionProviderModule {
  getFunction(identifier: string): ClientFunction {
    return new ApertureFunction();
  }
}
