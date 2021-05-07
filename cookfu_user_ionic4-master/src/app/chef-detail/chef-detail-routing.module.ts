import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChefDetailPage } from './chef-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ChefDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChefDetailPageRoutingModule {}
