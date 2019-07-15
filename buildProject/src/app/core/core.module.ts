// ./shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
    imports: [ CommonModule ],
    declarations: [ NavbarComponent ],
    exports: [
        CommonModule
    ]
})
export class CoreModule { }