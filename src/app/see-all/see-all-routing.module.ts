import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellAllComponent } from './sell-all/sell-all.component';
import { AuthorizedGuard } from '../auth/guard/authorized.guard';

const routes: Routes = [
  { path: '', component: SellAllComponent, canActivate: [AuthorizedGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeeAllRoutingModule {}
