import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantRoutingModule } from './accountant-routing-module';
import { Accountant } from './accountant';


@NgModule({
  declarations: [
    Accountant
  ],
  imports: [
    CommonModule,
    AccountantRoutingModule,
]
})
export class AccountantModule { }
