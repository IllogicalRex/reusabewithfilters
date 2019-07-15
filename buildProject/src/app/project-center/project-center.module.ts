// ./project-center/project-center.module.ts
import { NgModule } from '@angular/core';
import { ProjectCenterComponent } from './project-center.component';
import { ProjectService } from './project.service';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    imports: [ SharedModule ],
    declarations: [ ProjectCenterComponent ],
    providers: [ ProjectService ],
    exports: [ ProjectCenterComponent ]
})
export class ProjectCenterModule { }