import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizedGuard } from '../auth/guard/authorized.guard';
import { CoursewareComponent } from './components/courseware/courseware.component';

const routes: Routes = [
  { path: '', component: CoursewareComponent, canActivate: [AuthorizedGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursewareRoutingModule {}
