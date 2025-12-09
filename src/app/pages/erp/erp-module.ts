import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErpRoutingModule } from './erp-routing-module';
import { Erp } from './erp';


@NgModule({
  declarations: [
    Erp
  ],
  imports: [
    CommonModule,
    ErpRoutingModule
  ]
})
export class ErpModule { }
