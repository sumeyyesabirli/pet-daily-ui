import { Component, OnInit, Input } from '@angular/core';
import { ExternalButtonModel } from 'src/app/_layout/_models/external-button-model';

@Component({
  selector: 'app-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {
  @Input() data: any;
  @Input() columns: any;
  @Input() externalButtons: ExternalButtonModel[] = [];
  headerButtons: ExternalButtonModel[] = [];
  tdButtons: ExternalButtonModel[] = [];
  headers: any[] = [];
  body: any[] = [];
  constructor() { }

  ngOnInit() {
    this.externalButtons.forEach((x: any) => {
      if (x.id == 'refresh' || x.id == 'add') {
        this.headerButtons.push(x);
      } else {
        this.tdButtons.push(x);
      }
    })
    console.log(this.headerButtons);
    this.headers = this.columns.map((x: any) => {
      return x.caption
    });
  }
}
