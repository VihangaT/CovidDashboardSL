import { Component, OnInit } from '@angular/core';
import { Idetails } from './classes/Idetails';
import { Services } from './Services/services.component';
import { from } from 'rxjs';
import { Key } from 'protractor';
import { ValueShaper } from '../app/shared/valueShaper.component';
import { Chart } from 'node_modules/chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'covidDashboard';
  Details: Idetails[];
  errorMessage: string;
  filteredData: Idetails[];
  localNewCases: any;
  localActiveCases: any;
  localTotalCases: any;
  localDeaths: any;
  localRecovered: any;
  localTotalIndividualsHospitals: any;
  globalNewCases: any;
  globalTotalCases: any;
  totalGlobalDeaths: any;
  globalNewDeaths: any;
  globalRecovered: any;
  updatedTime: any;
  public doughnutChartLabels = ['Total Cases', 'Recovered Count'];
  public doughnutChartType = 'doughnut';
  public doughnutChartData: number[];
  val1: string;
  val2: string;
  intVal1: number;
  intVal2: number;
  totalPcrTestingCount: any;


  constructor(private serviceInstance: Services, private pipeInstance: ValueShaper) {

  }


  ngOnInit() {
    this.serviceInstance.getData().subscribe({
      next: Data => {
        this.Details = Data;
        this.filteredData = Object.keys(Data).map(key => Data[key]);

        this.localNewCases = this.filteredData.map(a => a.local_new_cases);
        this.localActiveCases = this.filteredData.map(a => a.local_active_cases);
        this.localTotalCases = this.filteredData.map(a => a.local_total_cases);
        this.localDeaths = this.filteredData.map(a => a.local_deaths);
        this.localRecovered = this.filteredData.map(a => a.local_recovered);
        this.localTotalIndividualsHospitals = this.filteredData.map(a => a.local_total_number_of_individuals_in_hospitals);
        this.globalNewCases = this.filteredData.map(a => a.global_new_cases);
        this.globalTotalCases = this.filteredData.map(a => a.global_total_cases);
        this.totalGlobalDeaths = this.filteredData.map(a => a.global_deaths);
        this.globalNewDeaths = this.filteredData.map(a => a.global_new_deaths);
        this.globalRecovered = this.filteredData.map(a => a.global_recovered);
        this.totalPcrTestingCount = this.filteredData.map(a => a.total_pcr_testing_count);
        this.updatedTime = this.filteredData.map(a => a.update_date_time);
        this.val1 = this.pipeInstance.transform(this.localTotalCases);
        this.val2 = this.pipeInstance.transform(this.localRecovered);
        this.intVal1 = parseInt(this.val1, 10);
        this.intVal2 = parseInt(this.val2, 10);
        console.log(this.intVal1);
        console.log(this.intVal2);

      },
      error: err => this.errorMessage = err
    }
    );
    this.doughnutChartData = [this.intVal1, this.intVal2];
   

  //   var myChart = new Chart("myChart", {
  //     type: 'pie',
  //     data: {
  //       labels: ['Total Cases', 'Recovered Count'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [50,50],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });
  }

}
