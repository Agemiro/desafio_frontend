import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeeAllRoutingModule } from './see-all-routing.module';
import { SellAllComponent } from './sell-all/sell-all.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SellAllComponent],
  imports: [CommonModule, SeeAllRoutingModule, SharedModule],
})
export class SeeAllModule {}
