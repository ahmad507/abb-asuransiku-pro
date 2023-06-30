import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PofilePage } from './pofile.page';

const routes: Routes = [
  {
    path: '',
    component: PofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PofilePageRoutingModule {}
