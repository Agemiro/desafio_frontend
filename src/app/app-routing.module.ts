import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//arquivo de rota global
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () =>
      import('./trakto-tv/trakto-tv.module').then((m) => m.TraktoTvModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
