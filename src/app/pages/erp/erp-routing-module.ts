import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Erp } from './erp';

const routes: Routes = [{ path: '', component: Erp }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErpRoutingModule {}
