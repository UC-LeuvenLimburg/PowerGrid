import { Component, OnInit } from '@angular/core';
import { PowerService } from '../power.service';
import { ZekeringService } from '../zekering.service';

@Component({
  selector: 'senseo',
  templateUrl: './senseo.component.html',
  styleUrls: ['./senseo.component.scss']
})
export class SenseoComponent implements OnInit {

  constructor(private power:PowerService, private zekering:ZekeringService) { }
  
  status: boolean = false;
  remaining: number = 5;
  verbruik:number = 40;

  brew() {
    this.status = true;
    this.power.huidigVerbruik += this.verbruik;
    
    this.remaining = 5;
    let i = setInterval(() => {
      if (this.remaining == 0) {
        this.status = false
        clearInterval(i)
        this.power.huidigVerbruik -= this.verbruik;
      } else { this.remaining-- }
    }, 1000)
  }

  ngOnInit(): void { }

}
