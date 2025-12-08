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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
