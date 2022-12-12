import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogBoxPage } from './dialog-box.page';

const routes: Routes = [
  {
    path: '',
    component: DialogBoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogBoxPageRoutingModule {}
