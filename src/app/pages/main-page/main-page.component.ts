import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  datas: any[] = [];
  constructor() { }

  ngOnInit() {
    this.datas = [
      {
        id : "1",
        name: "benjamın button"
      },
      {
        id : "2",
        name: "mahmut tuncer"
      },
      {
        id : "3",
        name: "mehmet ali erbil"
      },
      {
        id : "4",
        name: "avatar ayhan"
      }
    ]
  }

}
