import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Accountant } from './accountant';

const routes: Routes = [{ path: '', component: Accountant }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountantRoutingModule {}
