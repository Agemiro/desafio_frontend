import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizedGuard } from '../auth/guard/authorized.guard';
import { OpeningComponent } from './components/opening/opening.component';

const routes: Routes = [
  { path: '', component: OpeningComponent, canActivate: [AuthorizedGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpeningRoutingModule {}
