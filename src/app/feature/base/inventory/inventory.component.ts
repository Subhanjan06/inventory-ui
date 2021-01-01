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
  public pieChartLabels: Label[];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.inv = inventory;
    this.pieChartLabels = this.getPieChartLabels(this.inv);
    for(let i: number = 0; i < this.pieChartLabels.length; i++) {
      this.dataSet[i] = 0;
    }
    console.log(this.pieChartLabels);
    this.pieChartInit();
  }
  getPieChartLabels(labels) {
    var unique = [];
    var distinct = [];
    for (let i: number = 0; i< labels.length; i++) {
      if (!unique[labels[i].userLocation]) {
        distinct.push(labels[i].userLocation);
        unique[labels[i].userLocation] = 1;
      }
    }
    return distinct;
  }
  pieChartInit() {
    for (let i: number = 0; i < this.inv.length; i++ ) {
      for ( let j: number = 0; j < this.inv.length; j++) {
        if ( this.inv[i].userLocation === this.pieChartLabels[j]) {
          this.dataSet[j]++;
        }
      }
    }
    this.pieChartData = this.dataSet;
  }
  displayedColumns: string[] = ['id', 'timestamp', 'userLocation', 'package', 'organization', 'customer'];
  dataSource = inventory;
}
