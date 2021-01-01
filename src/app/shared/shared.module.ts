import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from './components/appbar/appbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router';

const components = [
  AppbarComponent,
  SidebarComponent
]

const modules = [
  // Material modules
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,

  // Default modules
  RouterModule
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
