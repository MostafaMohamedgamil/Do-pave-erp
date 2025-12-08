import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';


@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AccordionModule.forRoot(),
    AccordionModule,

  ]
})
export class HomeModule { }
