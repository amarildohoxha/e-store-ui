import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Paging} from "../helper/paging.helper";

@Component({
  selector: 'nv-sorting',
  templateUrl: './sorting.component.html'
})
export class SortingComponent {


  @Input() paging: Paging;
  @Input() label: string;
  @Input() icon: string;
  @Input() color: string;
  @Input() sortField: string;
  @Output() emitSorting: EventEmitter<Paging> = new EventEmitter<Paging>();

  onSort() {
    // check if there is an order field
    if (this.sortField) {
      if (this.paging.$orderField === this.sortField) {
        if (this.paging.$orderDirection === 'ASC') {
          this.paging.$orderDirection = 'DESC';
        }
        else {
          this.paging.$orderDirection = 'ASC';
        }
      }
      else {
        this.paging.$orderDirection = 'ASC';
      }
      this.paging.$orderField = this.sortField;
      this.paging.$pageNumber = 1;
      this.emitSorting.emit(this.paging);
    }
  }
}
