import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersStatusPage } from './orders-status.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersStatusPageRoutingModule {}
