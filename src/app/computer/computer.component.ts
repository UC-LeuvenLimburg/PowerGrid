import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PowerService } from '../power.service';

@Component({
  selector: 'computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  constructor(private power: PowerService) { }

  status: boolean = false;
@Output()  verbruikt: EventEmitter<any>=new EventEmitter();
@Input() naam:string;
verbruik:number;
richtwaarde:number=100;
afwijking:number=0.2;

  toggle() {
    // document.querySelector("div").classList.add("on") // works but should not be used in Angular
    if (this.status) { 
      this.power.huidigVerbruik -= this.verbruik 
    } else { 
      this.power.huidigVerbruik += this.verbruik 
    }
    this.status = !this.status;
  }

  ngOnInit(): void {
    let i = setInterval(() => {
      this.verbruik = this.status?this.richtwaarde * (1+(2*Math.random()-1)*this.afwijking):0
      this.verbruikt.emit({id:this.naam,verbruik:this.verbruik})
    }, 1000)
   }

}


