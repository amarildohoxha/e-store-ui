// import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-pagination',
//   templateUrl: './pagination.component.html',
//   styleUrls: ['./../../assets/scss/main.scss']
// })
// export class PaginationComponent implements OnInit {
//   @Input() totalItems: number = 0;
//   @Input() itemsPerPage: number = 8;
//     @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
//
//
//
//   @Input()
//   get currentPage(): number {
//     return this._currentPage;
//   }
//   set currentPage(val: number) {
//     this._currentPage = val;
//     this.currentPageChange.emit(this._currentPage);
//   }
//
//   @Output() currentPageChange: EventEmitter<number> = new EventEmitter<number>();
//
//   private _currentPage: number = 1;
//   totalPages: number = 0;
//   pages: number[] = [];
//
//   ngOnInit() {
//     this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
//     this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
//   }
//
//   setPage(page: number) {
//     if (page < 1 || page > this.totalPages) return;
//     this.currentPage = page;
//     this.pageChange.emit(this.currentPage);
//   }
// }




// import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-pagination',
//   templateUrl: './pagination.component.html',
//   styleUrls: ['./../../assets/scss/main.scss']
// })
// export class PaginationComponent implements OnInit {
//   @Input() totalItems: number;
//   @Input() itemsPerPage: number = 8;
//   @Input() currentPage: number = 1;
//   @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
//
//   totalPages: number;
//   pages: number[];
//
//   ngOnInit() {
//     this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
//     this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
//   }
//
//   setPage(page: number) {
//     if (page < 1 || page > this.totalPages) return;
//     this.currentPage = page;
//     this.pageChange.emit(this.currentPage);
//   }
// }


import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Paging} from "../helper/paging.helper";

@Component({
  selector: 'app-pagination',
  providers: [],
  templateUrl: './pagination.component.html',
  styleUrls: ['./../../assets/scss/main.scss'],
  encapsulation: ViewEncapsulation.None
})

/**
 *
 */
export class PaginationComponent {

  @Input() paging: Paging;
  @Output() emitPaging: EventEmitter<Paging> = new EventEmitter<Paging>();

  private pageSizeList: Array<number> = [5, 10, 20, 50, 100];


  public onNextPage() {
    this.paging.$pageNumber = this.paging.$pageNumber + 1;
    this.emitPaging.emit(this.paging);
  }

  public onPreviousPage() {
    this.paging.$pageNumber = this.paging.$pageNumber - 1;
    this.emitPaging.emit(this.paging);
  }

  public onFirstPage() {
    this.paging.$pageNumber = 1;
    this.emitPaging.emit(this.paging);
  }

  public onLastPage() {
    this.paging.$pageNumber = Math.ceil(this.paging.$totalSize / this.paging.$pageSize);
    this.emitPaging.emit(this.paging);
  }

  public onPageSize(size: number) {
    this.paging.$pageSize = size;
    this.paging.$pageNumber = 1;
    this.emitPaging.emit(this.paging);
  }

  public get $pageSizeList(): Array<number> {
    return this.pageSizeList;
  }

  public set $pageSizeList(value: Array<number>) {
    this.pageSizeList = value;
  }


  // //
  // @Input() paging: Paging = new Paging();
  // @Input() showPageSize: boolean = true;
  // @Input() linksEnabled: boolean = true;
  // //
  // @Output() emitPaging: EventEmitter<Paging> = new EventEmitter<Paging>();
  // //
  // pageSizeList: Array<number> = [5, 10, 20, 50, 100];
  // customPageNumber: number = 0;
  //
  // // Methods
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   // if (changes) {
  //     this.customPageNumber = this.paging && this.paging.$pageNumber ? this.paging.$pageNumber : 1;
  //   // }
  // }
  //
  // /**
  //  *
  //  * @param paging
  //  */
  // public onCalculateResults(paging: Paging) {
  //   const from = (paging.$pageNumber - 1) * paging.$pageSize + 1;
  //   const to = (from + (paging.$pageSize - 1) > paging.$totalSize ? paging.$totalSize : from + (paging.$pageSize - 1));
  //   paging.$results = from + ' - ' + to + ' / ' + paging.$totalSize;
  //   paging.$hasPreviousPage = from !== 1;
  //   paging.$hasNextPage = paging.$pageNumber * paging.$pageSize < paging.$totalSize;
  //   paging.$hasFirstPage = paging.$pageNumber > 1;
  //   paging.$hasLastPage = paging.$pageNumber * paging.$pageSize < paging.$totalSize;
  //
  //   return paging;
  // }
  //
  // /**
  //  *
  //  * @param paging
  //  */
  // public onNextPage(paging: Paging) {
  //   paging.$pageNumber = paging.$pageNumber + 1;
  //   this.customPageNumber = paging.$pageNumber;
  //   this.emitPaging.emit(paging);
  // }
  //
  // /**
  //  *
  //  * @param paging
  //  */
  // public onPreviousPage(paging: Paging) {
  //   paging.$pageNumber = paging.$pageNumber - 1;
  //   this.customPageNumber = paging.$pageNumber;
  //   this.emitPaging.emit(paging);
  // }
  //
  // /**
  //  *
  //  * @param paging
  //  */
  // public onFirstPage(paging: Paging) {
  //   paging.$pageNumber = 1;
  //   this.customPageNumber = paging.$pageNumber;
  //   this.emitPaging.emit(paging);
  // }
  //
  //
  // /**
  //  *
  //  * @param paging
  //  */
  // public onLastPage(paging: Paging) {
  //   paging.$pageNumber = Math.ceil(paging.$totalSize / paging.$pageSize);
  //   this.customPageNumber = paging.$pageNumber;
  //   this.emitPaging.emit(paging);
  // }
  //
  // public onSetPage(paging: Paging) {
  //   const totalPages = Math.ceil(paging.$totalSize / paging.$pageSize);
  //   if (totalPages > 0) {
  //     if (this.customPageNumber > totalPages) {
  //       this.customPageNumber = totalPages;
  //     } else if (this.customPageNumber < 1) {
  //       this.customPageNumber = 1;
  //     }
  //     paging.$pageNumber = this.customPageNumber;
  //     this.emitPaging.emit(paging);
  //   } else {
  //     this.customPageNumber = 1;
  //   }
  // }
  //
  // public getTotalPages(paging: Paging): number {
  //   return Math.ceil(paging.$totalSize / paging.$pageSize);
  // }
  //
  // /**
  //  *
  //  * @param paging
  //  * @param size
  //  */
  // public onPageSize(paging: Paging, size: number) {
  //   paging.$pageSize = size;
  //   paging.$pageNumber = 1;
  //   this.customPageNumber = paging.$pageNumber;
  //   this.emitPaging.emit(paging);
  // }
  //
  // // Getters and Setters
  //
  // public get $pageSizeList(): Array<number> {
  //   return this.pageSizeList;
  // }
  //
  // public set $pageSizeList(value: Array<number>) {
  //   this.pageSizeList = value;
  // }

}

