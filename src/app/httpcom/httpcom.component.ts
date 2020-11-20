import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Response {
  response: string
}

@Component({
  selector: 'httpcom',
  templateUrl: './httpcom.component.html',
  styleUrls: ['./httpcom.component.scss']
})
export class HttpcomComponent implements OnInit {

  constructor(private http: HttpClient) { }

  result;
  ngOnInit(): void {
  }
  test() {
    // alert("test succeeded!")
    this.http.get("http://localhost:3000/test/?p=message")
      .subscribe((data: Response) => {
        this.result = data.response;
      },

        error => {
          console.log('Log the error here: ', error);
        });

  }

}
