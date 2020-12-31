import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './components/appbar/appbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'


const components = [
  AppbarComponent,
  SidebarComponent
]

const modules = [
  // Material modules
  MatIconModule,
  MatToolbarModule,
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    components,
    modules
  ]
})
export class SharedModule { }
