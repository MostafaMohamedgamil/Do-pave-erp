import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullErp } from './full-erp';

const routes: Routes = [{ path: '', component: FullErp }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullErpRoutingModule {}
