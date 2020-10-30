import { Component, OnInit } from '@angular/core';
import { PowerService } from '../power.service';
import { ZekeringService } from '../zekering.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public power:PowerService,public zekering:ZekeringService) { }

  verbruik: number = this.power.huidigVerbruik;
  
  ngOnInit(): void {
    
  }

}
