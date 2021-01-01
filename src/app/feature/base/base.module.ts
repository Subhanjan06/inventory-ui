import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table'
import { ChartsModule } from 'ng2-charts';

const components = [
  LayoutComponent,
  InventoryComponent
]
const modules = [

  // Material modules
  MatTableModule,
  ChartsModule,


  // default modules
  CommonModule,
  SharedModule,
  BaseRoutingModule

];


@NgModule({
  declarations: [
    components
  ],
  imports: [
    modules
  ]
})
export class BaseModule { }
