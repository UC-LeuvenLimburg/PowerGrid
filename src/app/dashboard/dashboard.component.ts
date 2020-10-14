import { Component, OnInit } from '@angular/core';
import { PowerService } from '../power.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public power:PowerService) { }

  verbruik: number = this.power.huidigVerbruik;
  
  ngOnInit(): void {
    
  }

}
