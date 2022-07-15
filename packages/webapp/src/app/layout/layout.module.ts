import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from 'src/app/layout/layout-routing.module';
import { LayoutComponent } from 'src/app/layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
