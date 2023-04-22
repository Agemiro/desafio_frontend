import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraktoTvRoutingModule } from './trakto-tv-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { OpeningComponent } from './containers/opening/opening.component';
import { CoursewareComponent } from './containers/courseware/courseware.component';
import { SeeAllComponent } from './components/see-all/see-all.component';


@NgModule({
  declarations: [
    LoginComponent,
    OpeningComponent,
    CoursewareComponent,
    SeeAllComponent
  ],
  imports: [
    CommonModule,
    TraktoTvRoutingModule
  ]
})
export class TraktoTvModule { }
