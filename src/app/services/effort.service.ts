//  -------------------------------------------------------------------
//  effort.service.ts
//  -------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { Effort } from '../models/effort.model';
//import { EffortInfo } from '../models/effort-info.model';

@Injectable()

export class EffortService {

     private baseUrl = 'http://localhost:28091/api/'

    constructor(private http: Http, private httpService: HttpService) { }

    public lookupEfforts(effort: Effort): Observable<any> {
            console.log('service:lookupEfforts')
            let url = this.baseUrl+"lookupEfforts";
            return this.httpService.httpPost(effort, url);
    }

/*
    public getEfforts(effortInfo: EffortInfo): Observable<any> {
      console.log('effort.service:getEfforts')
      let url = this.baseUrl+"getEfforts";
      return this.httpService.httpPost(effortInfo, url);
    }

    public getEffort(effortInfo: EffortInfo): Observable<any> {
            let url = this.baseUrl+"getEffort";
            return this.httpService.httpPost(effortInfo, url);
    }

    public updateEffort(effortInfo: EffortInfo): Observable<any> {
            let url = this.baseUrl+"updateEffort";
            return this.httpService.httpPost(effortInfo, url);
    }


    public authenticate(effort: EffortInfo): Observable<any> {
        console.log('effort.service:authenticate')
        let url = this.baseUrl+"geteffort";
        return this.httpService.httpPost(effort, url);
    }
*/
}