//  -------------------------------------------------------------------
//  priority.service.ts
//  -------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { Priority } from '../models/priority.model';
//import { PrioritieInfo } from '../models/priority-info.model';

@Injectable()

export class PriorityService {

     private baseUrl = 'http://localhost:28091/api/'

    constructor(private http: Http, private httpService: HttpService) { }

    public lookupPriorities(priority: Priority): Observable<any> {
            console.log('service:LookupPriorities:')
            let url = this.baseUrl+"lookupPriorities";
            return this.httpService.httpPost(priority, url);
    }

/*
    public getPriorities(priorityInfo: PriorityInfo): Observable<any> {
      console.log('priority.service:getPriorities')
      let url = this.baseUrl+"getPriorities";
      return this.httpService.httpPost(priorityInfo, url);
    }

    public getPrioritie(priorityInfo: PrioritieInfo): Observable<any> {
            let url = this.baseUrl+"getpriority";
            return this.httpService.httpPost(priorityInfo, url);
    }

    public updatePrioritie(priorityInfo: PrioritieInfo): Observable<any> {
            let url = this.baseUrl+"updatePriority";
            return this.httpService.httpPost(priorityInfo, url);
    }


    public authenticate(priority: PriorityInfo): Observable<any> {
        console.log('priority.service:authenticate')
        let url = this.baseUrl+"getpriority";
        return this.httpService.httpPost(priority, url);
    }
*/
}