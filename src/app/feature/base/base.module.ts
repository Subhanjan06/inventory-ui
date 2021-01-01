import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

const components = [
  LayoutComponent,
  InventoryComponent
]
@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    SharedModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }
