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
  pagining: any = {
    page: 1,
    perPage: 5,
    sort: null,
    filter: null,
  }
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
      return {
        caption: x.caption,
        key: x.key
      }
    });
    this.getButton = this.externalButtons.find(x => x.id == "refresh");
  }

  pageCounter(e: any) {
    let b: boolean = false;
    if (e == '+') {
      if (this.pageResult.data && this.pageResult.data.length > 0) {
        this.pagining.page++;
        b = true;
      } else {
        b = false;
      }
    }
    else {
      if (this.pagining.page > 1) {
        this.pagining.page--;
        b = true;
      } else {
        b = false;
      }
    }
    if (b)
      this.getButton.action(this.pagining);
  }

  perPageChange(perPage: any) {
    this.pagining.perPage = perPage;
    this.getButton.action(this.pagining);
  }

  shortAsc(key: any) {
    this.pagining.sort = `${key} asc`;
    this.getButton.action(this.pagining);
  }

  shortDesc(key: any) {
    this.pagining.sort = `${key} desc`;
    this.getButton.action(this.pagining);
  }

   filter(key: string) {
    var header = this.headers.find(header => header.key === key);
    var filterValue = header.filterValue;
    this.pagining.filter = `${key}:${filterValue}`;
    this.getButton.action(this.pagining);
  }

}
