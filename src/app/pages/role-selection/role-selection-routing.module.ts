

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleSelectionPage } from './role-selection.page';

const routes: Routes = [
  {
    path: '',
    component: RoleSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleSelectionPageRoutingModule {}
