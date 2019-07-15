// ./shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLayoutComponent } from './table-layout/table-layout.component';
import { FormatCellPipe } from './format-cell.pipe';
@NgModule({
    imports: [ CommonModule ],
    declarations: [ TableLayoutComponent, FormatCellPipe ],
    exports: [
        CommonModule, 
        TableLayoutComponent,
        
    ]
})
export class SharedModule { }