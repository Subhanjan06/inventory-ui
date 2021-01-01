import { Component, OnInit } from '@angular/core';
import { inventory } from 'src/app/configs/app.config';
import { InventoryData } from 'src/app/shared/models/inventory-data';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip
} from 'ng2-charts';
//! my data

const data: InventoryData[] = inventory;

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  inv: any;
  dataSet: number[] = [0, 0, 0];
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartLabels: Label[] = ['US', 'UK', 'Canada'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.inv = inventory;
    this.pieChartInit();
  }

  pieChartInit() {
    for (let i: number = 0; i < this.inv.length; i++) {
      if ( this.inv[i].userLocation === "US") {
        this.dataSet[0]++;
      } else if ( this.inv[i].userLocation === "UK") {
        this.dataSet[1]++;
      } else if ( this.inv[i].userLocation === "Canada") {
        this.dataSet[2]++;
      }
    };
    this.pieChartData = this.dataSet;
  }
  displayedColumns: string[] = ['id', 'timestamp', 'userLocation', 'package', 'organization', 'customer'];
  dataSource = data;
}
