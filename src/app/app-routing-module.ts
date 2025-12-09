import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home-module').then((m) => m.HomeModule),
  },
  {
    path: 'accountant',
    loadChildren: () =>
      import('./pages/accountant/accountant-module').then((m) => m.AccountantModule),
  },
  {
    path: 'erp',
    loadChildren: () => import('./pages/erp/erp-module').then((m) => m.ErpModule),
  },
  {
    path: 'full-erp',
    loadChildren: () => import('./pages/full-erp/full-erp-module').then((m) => m.FullErpModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login-module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
