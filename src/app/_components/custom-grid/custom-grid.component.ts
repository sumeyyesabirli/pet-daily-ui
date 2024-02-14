import { Component, OnInit, Input } from '@angular/core';
import { ExternalButtonModel } from 'src/app/_layout/_models/external-button-model';

@Component({
  selector: 'app-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.css']
})
export class CustomGridComponent implements OnInit {
  @Input() pageResult: any;
  @Input() columns: any;
  @Input() externalButtons: ExternalButtonModel[] = [];
  headerButtons: ExternalButtonModel[] = [];
  tdButtons: ExternalButtonModel[] = [];
  headers: any[] = [];
  body: any[] = [];
  page: number = 1;
  perPage: number = 5;
  constructor() { }
  getButton: any;

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
    this.getButton = this.externalButtons.find(x => x.id == "refresh");
  }

  pageCounter(e: any) {
    let b: boolean = false;
    if (e == '+') {
      if (this.pageResult.data && this.pageResult.data.length > 0) {
        this.page++;
        b = true;
      } else {
        b = false;
      }
    }
    else {
      if (this.page > 1) {
        this.page--;
        b = true;
      } else {
        b = false;
      }
    }
    if (b)
      this.getButton.action(this.page, this.perPage);
  }

  perPageChange(perPage: any) {
    this.perPage = perPage;
    this.getButton.action(this.page, this.perPage);
  }
}
