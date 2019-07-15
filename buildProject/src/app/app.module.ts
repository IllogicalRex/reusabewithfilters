import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectCenterModule } from './project-center/project-center.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProjectCenterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
