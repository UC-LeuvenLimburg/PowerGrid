import { Component, OnInit } from '@angular/core';
import { PowerService } from '../power.service';

@Component({
  selector: 'computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  constructor(private power: PowerService) { }

  status: boolean = false;
  verbruik: number = 100;

  toggle() {
    // document.querySelector("div").classList.add("on") // works but should not be used in Angular
    if (this.status) { 
      this.power.huidigVerbruik -= this.verbruik 
    } else { 
      this.power.huidigVerbruik += this.verbruik 
    }
    this.status = !this.status;
  }

  ngOnInit(): void { }

}
