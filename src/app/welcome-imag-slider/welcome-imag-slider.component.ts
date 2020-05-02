import { Component, OnInit } from '@angular/core';
import { Idetails } from '../classes/Idetails';
import { Services } from '../Services/services.component';


@Component({
  selector: 'app-welcome-imag-slider',
  templateUrl: './welcome-imag-slider.component.html',
  styleUrls: ['./welcome-imag-slider.component.css']
})
export class WelcomeImagSliderComponent implements OnInit {

  Details: Idetails[];
  errorMessage: string;
  filteredData: Idetails[];
  updatedTime: any;
  constructor(private serviceInstance: Services ) {

  }

  ngOnInit(): void {
    this.serviceInstance.getData().subscribe({
     next: Data => {
       this.Details = Data;
       this.filteredData = Object.keys(Data).map(key => Data[key]);

       this.updatedTime = this.filteredData.map(a => a.update_date_time);
     },
     error: err => this.errorMessage = err
    });

  }


}
