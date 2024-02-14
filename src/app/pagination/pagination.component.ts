// pagination.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemPerPage: any;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  totalPages = 0;
  pages: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.calculateTotalPages();
  }

  ngOnChanges(): void {
    this.calculateTotalPages();
  }

  calculateTotalPages(): void {
    if (this.totalItems) {
      this.totalPages = Math.ceil(this.totalItems / this.itemPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }
  }

  pageClicked(page: number) {
    if (page > this.totalPages || page < 1) return;
    this.onClick.emit(page);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageClicked(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.pageClicked(this.currentPage - 1);
    }
  }
}
