import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagelanguagePage } from './managelanguage.page';

const routes: Routes = [
  {
    path: '',
    component: ManagelanguagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagelanguagePageRoutingModule {}
