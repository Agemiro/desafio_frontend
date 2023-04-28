import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ModuleContentComponent } from './components/module-content/module-content.component';

@NgModule({
  declarations: [ToolbarComponent, ModuleContentComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [AppMaterialModule, ToolbarComponent, ModuleContentComponent],
})
export class SharedModule {}
