import {  Input, EventEmitter, Output, Directive } from '@angular/core';

export interface Country {
    id: number;
    First: string;
    Last: string;
    Handle: string;
  }

  export const COUNTRIES: Country[] = [
    {
      id: 1,
      First: 'Mark',
      Last: 'Otto',
      Handle: 'mdo'
    },
    {
        id: 2,
        First: 'Jacob',
        Last: 'Thornton',
        Handle: '@fat'
      },
      {
        id: 3,
        First: 'Larry',
        Last: 'the Bird',
        Handle: '@twitter'
      }
  ];


export type SortDirection = 'asc' | 'desc' | '';
export const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
    selector: 'th[sortable]',
    host: {
      '[class.asc]': 'direction === "asc"',
      '[class.desc]': 'direction === "desc"',
      '(click)': 'rotate()'
    }
  })
  export class NgbdSortableHeader {
  
    @Input() sortable: string;
    @Input() direction: SortDirection = '';
    @Output() sort = new EventEmitter<SortEvent>();
  
    rotate() {
      this.direction = this.rotate[this.direction];
      this.sort.emit({column: this.sortable, direction: this.direction});
    }
  }