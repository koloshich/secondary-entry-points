import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AperturePageModule, ApertureRouteModule } from 'mam-plugin-aperture/page';

@NgModule({
  imports: [
    CommonModule,
    AperturePageModule,
    ApertureRouteModule,
  ]
})
export class ApertureModule {
}
