import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {
  @Input() data: any;
  @Input() columns: any;

  headers: any[] = [];
  body: any[] = [];
  constructor() { }



  ngOnInit() {
    this.headers = this.columns.map((x: any) => {
      return x.caption
    });
    //Object.keys(this.data).forEach(key => this.body.push(key));
  }

}
