import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullErpRoutingModule } from './full-erp-routing-module';
import { FullErp } from './full-erp';


@NgModule({
  declarations: [
    FullErp
  ],
  imports: [
    CommonModule,
    FullErpRoutingModule
  ]
})
export class FullErpModule { }
