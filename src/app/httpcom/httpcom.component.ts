import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

interface Response {
  response: string
}

@Component({
  selector: 'httpcom',
  templateUrl: './httpcom.component.html',
  styleUrls: ['./httpcom.component.scss']
})
export class HttpcomComponent implements OnInit {

  constructor(private web: WebService) { }

  result;
  ngOnInit(): void {
  }
  test() {
    // alert("test succeeded!")
    this.web.ping()
      .subscribe((data: Response) => {
        this.result = data.response;
      },

        error => {
          console.log('Log the error here: ', error);
        });

  }

}
