import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { SortDirection, SortEvent, COUNTRIES, compare, NgbdSortableHeader, Country } from './sortable.directive';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries = COUNTRIES;
  id: number;
  First: string;
  Last: string;
  Handle: string;
  bandera = true;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {
    console.log(this.headers);
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '') {
      this.countries = COUNTRIES;
    } else {
      this.countries = [...COUNTRIES].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }
  
  abilith() {
    if (this.bandera) {
      this.bandera = false;
    } else {
      this.bandera = true;
    }
  }

  value(id: number, First: string, Last: string, Handle: string) {
    this.id = id;
    this.First = First;
    this.Last = Last;
    this.Handle = Handle;
    let array = new Array<Country>();
    console.log(this.id, '  ', this.First, '  ', this.Last, '  ', this.Handle );
    for (let count of this.countries) {
      if ((count.id == this.id || this.id == null ) && (count.First.includes(this.First))) {
        console.log(count);
        array.push(count);
      }
    }
    if (this.id == 0) {
      this.countries = COUNTRIES;
    }
    this.countries = array;
  }
// || countrie.First === First || countrie.Last === Last || countrie.Handle === Handle
}
