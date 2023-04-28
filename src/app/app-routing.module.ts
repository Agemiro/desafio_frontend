import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//global route
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'abertura' },
  {
    path: 'abertura',
    loadChildren: () =>
      import('./opening/opening.module').then((m) => m.OpeningModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'material-didatico',
    loadChildren: () =>
      import('./courseware/courseware.module').then((m) => m.CoursewareModule),
  },
  {
    path: 'ver-todos',
    loadChildren: () =>
      import('./see-all/see-all.module').then((m) => m.SeeAllModule),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
