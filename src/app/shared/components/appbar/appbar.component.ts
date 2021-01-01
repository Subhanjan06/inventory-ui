import { Component, OnInit } from '@angular/core';
import { menu } from 'src/app/configs/app.config';


@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {
  sideNav: { name: string; path: string; icon: string; }[];

  constructor() { }

  ngOnInit(): void {
    this.sideNav = menu;
  }

}
