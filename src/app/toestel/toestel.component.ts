import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toestel',
  templateUrl: './toestel.component.html',
  styleUrls: ['./toestel.component.scss']
})
export class ToestelComponent implements OnInit {

  constructor() { }
  @Input() naam: string;

  ngOnInit(): void {
  }

}
