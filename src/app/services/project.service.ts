//  -------------------------------------------------------------------
//  project.service.ts
//  -------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { Project } from '../models/project.model';
//import { ProjectInfo } from '../models/project-info.model';

@Injectable()

export class ProjectService {

     private baseUrl = 'http://localhost:28091/api/'

    constructor(private http: Http, private httpService: HttpService) { }

    public lookupProjects(project: Project): Observable<any> {
            console.log('service:lookupProjects:')
            let url = this.baseUrl+"lookupProjects";
            return this.httpService.httpPost(project, url);
    }

/*
    public getProjects(projectInfo: ProjectInfo): Observable<any> {
      console.log('project.service:getProjects')
      let url = this.baseUrl+"getProjects";
      return this.httpService.httpPost(projectInfo, url);
    }

    public getProject(projectInfo: ProjectInfo): Observable<any> {
            let url = this.baseUrl+"getProject";
            return this.httpService.httpPost(projectInfo, url);
    }

    public updateProject(projectInfo: ProjectInfo): Observable<any> {
            let url = this.baseUrl+"updateProject";
            return this.httpService.httpPost(projectInfo, url);
    }


    public authenticate(project: ProjectInfo): Observable<any> {
        console.log('project.service:authenticate')
        let url = this.baseUrl+"getproject";
        return this.httpService.httpPost(project, url);
    }
*/
}