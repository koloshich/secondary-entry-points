import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AperturePageComponent } from './aperture-page/aperture-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: AperturePageComponent
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class ApertureRouteModule {
}
