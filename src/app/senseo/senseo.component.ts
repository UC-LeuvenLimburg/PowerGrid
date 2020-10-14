import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'senseo',
  templateUrl: './senseo.component.html',
  styleUrls: ['./senseo.component.scss']
})
export class SenseoComponent implements OnInit {

  constructor() { }
  
  status: boolean = false;
  remaining: number = 5;
  verbruik:number = 40;

  brew() {
    this.status = true;
    this.remaining = 5;
    let i = setInterval(() => {
      if (this.remaining == 0) {
        this.status = false
        clearInterval(i)
      } else { this.remaining-- }
    }, 1000)
  }

  ngOnInit(): void { }

}
