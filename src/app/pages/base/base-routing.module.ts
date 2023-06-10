import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasePage } from './base.page';

const routes: Routes = [
  {
    path: '',
    component: BasePage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('../../pages/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'policy',
        loadChildren: () => import('../../pages/policy/policy.module').then( m => m.PolicyPageModule)
      },
      {
        path: 'claim',
        loadChildren: () => import('../../pages/claim/claim.module').then( m => m.ClaimPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/pofile.module').then(m => m.PofilePageModule)
      },
      {
        path: '',
        redirectTo: '/base/dashboard',
        pathMatch: "full"
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasePageRoutingModule {}
