import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FPSToken } from 'mam-core';
import { ApertureFunctions } from './function-provider.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: FPSToken,
    useClass: ApertureFunctions
  }]
})
export class ApertureFunctionsModule {
}
