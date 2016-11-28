//  -------------------------------------------------------------------
//  issueStatus.service.ts
//  -------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { IssueStatus } from '../models/issueStatus.model';
//import { IssueStatusInfo } from '../models/issueStatus-info.model';

@Injectable()

export class IssueStatusService {

     private baseUrl = 'http://localhost:28091/api/'

    constructor(private http: Http, private httpService: HttpService) { }

    public lookupIssueStatuses(issueStatus: IssueStatus): Observable<any> {
            console.log('service:lookupIssueStatuses')
            let url = this.baseUrl+"lookupIssueStatuses";
            return this.httpService.httpPost(issueStatus, url);
    }

/*
    public getIssueStatuses(issueStatusInfo: IssueStatusInfo): Observable<any> {
      console.log('issueStatus.service:getIssueStatuses')
      let url = this.baseUrl+"getIssueStatuses";
      return this.httpService.httpPost(issueStatusInfo, url);
    }

    public getIssueStatus(issueStatusInfo: IssueStatusInfo): Observable<any> {
            let url = this.baseUrl+"getIssueStatus";
            return this.httpService.httpPost(issueStatusInfo, url);
    }

    public updateIssueStatus(issueStatusInfo: IssueStatusInfo): Observable<any> {
            let url = this.baseUrl+"updateIssueStatus";
            return this.httpService.httpPost(issueStatusInfo, url);
    }


    public authenticate(issueStatus: IssueStatusInfo): Observable<any> {
        console.log('issueStatus.service:authenticate')
        let url = this.baseUrl+"getissueStatus";
        return this.httpService.httpPost(issueStatus, url);
    }
*/
}