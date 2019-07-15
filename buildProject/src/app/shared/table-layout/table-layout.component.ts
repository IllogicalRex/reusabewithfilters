// ./shared/table-layout.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ColumnSetting } from '../layout.model';
import { FormatCellPipe } from '../format-cell.pipe';
@Component({
    selector: 'ct-table',
    providers: [FormatCellPipe ],
    templateUrl: 'table-layout.component.html'
})
export class TableLayoutComponent { 
    @Input() records: any[];
    @Input() caption: string;
    @Input() settings: ColumnSetting[];
    @Output() sendInput = new EventEmitter();
    @Output() sendKey = new EventEmitter();
    bandera = true;
    columnMaps: ColumnSetting[];
    keys: string[];

    sentInput(map: any, key: string) {
       this.sendInput.emit({map, key});
    }
    abilith() {
        if (this.bandera) {
            this.bandera = false;
          } else {
            this.bandera = true;
          }
    }
    ngOnChanges() {
        if (this.settings) { // when settings provided
            this.columnMaps = this.settings;
        } else { // no settings, create column maps with defaults
            this.columnMaps = Object.keys(this.records[0])
                .map( key => {
                     return {
                         primaryKey: key,
                         header: key.slice(0, 1).toUpperCase() + 
                            key.replace(/_/g, ' ' ).slice(1)
                }
            });
        }
    }
}