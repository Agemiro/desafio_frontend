import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpeningRoutingModule } from './opening-routing.module';
import { OpeningComponent } from './components/opening/opening.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OpeningComponent],
  imports: [CommonModule, OpeningRoutingModule, SharedModule],
})
export class OpeningModule {}
