import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoursewareRoutingModule } from './courseware-routing.module';
import { CoursewareComponent } from './components/courseware/courseware.component';

@NgModule({
  declarations: [CoursewareComponent],
  imports: [CommonModule, CoursewareRoutingModule, SharedModule],
})
export class CoursewareModule {}
