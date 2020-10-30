import { Component, OnInit, Input,ContentChildren,AfterContentInit } from '@angular/core';

interface vals {
  id:string,
  verbruik:number
}

@Component({
  selector: 'circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.scss']
})
export class CircuitComponent implements OnInit,AfterContentInit {

  constructor() { }
@Input() naam:string;
@ContentChildren("consumer") offspring;
verbruik:number=0;
verbruiken={};

  ngOnInit(): void {
  }
  ngAfterContentInit():void{
    console.log(this.offspring);
    this.offspring.forEach(element => {
      element.verbruikt.subscribe((e:vals)=>{
        this.verbruiken[e.id]=e.verbruik;
        this.verbruik=Object.values(this.verbruiken).reduce<number>((acc:number,val:number)=> acc+val,0)
      })
    });
  }

}
