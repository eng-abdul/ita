import { Component } from '@angular/core';

import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
import { DriverService } from 'src/app/services/driver.service';
import { RiderService } from 'src/app/services/rider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dt:number = 0;
  rt:number = 0;
  constructor (private dr:DriverService,private rd:RiderService){
    this.dr.getDriver().subscribe((res)=>{
      this.dt = res.length;
      console.log(this.dt)
    });
    this.rd.getRider().subscribe((res)=>{
      this.rt = res.length;
      console.log(this.rt)
    })

  }
  chartSeries: ApexNonAxisChartSeries = [this.rt, this.dt];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  chartLabels = ["Riders", "Drivers", ];

  chartTitle: ApexTitleSubtitle = {
    text: 'Users',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };
}
