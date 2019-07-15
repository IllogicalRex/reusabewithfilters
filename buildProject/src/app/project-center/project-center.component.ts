// ./project-center/project-center.component.ts
import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { Project, Person } from './model';
import { ColumnSetting } from '../shared/layout.model';
@Component({
    selector: 'ct-project-center',
    templateUrl: 'project-center.component.html'
})
export class ProjectCenterComponent implements OnInit {
    title: string = 'Project Center';
    projects: Project[];
    people: Person[];
    name: string;
    first: string;
    cost: number;
    id: number;
    job: string;
    year_joined: number;
    missions: string;
    projectSettings: ColumnSetting[] = 
      [
          {
              primaryKey: 'name',
              header: 'Name'
          },
          {
              primaryKey: 'first_flight',
              header: 'First launch'
          },
          {
              primaryKey: 'cost',
              header: 'Cost'
          }
      ];

      getInput(input: any) {
       // console.log(input.map, input.key);
        let key = input.key;
        switch (key) {
            case 'name':
                this.name = input.map;
            break;
            case 'first_flight':
                this.first = input.map;
            break;
            case 'cost':
                this.cost = input.map;
            break;
            case 'id':
                this.id = input.map;
            break;
            case 'job':
                this.job = input.map;
            break;
            case 'year_joined':
                this.year_joined = input.map;
            break;
            case 'missions':
                this.missions = input.map;
            break;
        } 
        // console.log(this.name, '  ', this.first, '  ', this.cost);
        console.log(this.id, '  ', this.name, '  ', this.job, '  ', this.year_joined, '  ', this.missions);
      }

    constructor(private projectService: ProjectService){}
    ngOnInit() {
        this.projects = this.projectService.getProjects();
        this.people =   this.projectService.getPersonnel();
        console.log(this.projects);
        console.log(this.people);
    }
 }