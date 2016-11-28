//  -------------------------------------------------------------------
//  issueType.service.ts
//  -------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { IssueType } from '../models/issueType.model';
//import { IssueTypeInfo } from '../models/issueType-info.model';

@Injectable()

export class IssueTypeService {

     private baseUrl = 'http://localhost:28091/api/'

    constructor(private http: Http, private httpService: HttpService) { }

    public lookupIssueTypes(issueType: IssueType): Observable<any> {
            console.log('service:lookupIssueTypes')
            let url = this.baseUrl+"lookupIssueTypes";
            return this.httpService.httpPost(issueType, url);
    }

/*
    public getIssueTypes(issueTypeInfo: IssueTypeInfo): Observable<any> {
      console.log('issueType.service:getIssueTypes')
      let url = this.baseUrl+"getIssueTypes";
      return this.httpService.httpPost(issueTypeInfo, url);
    }

    public getIssueType(issueTypeInfo: IssueTypeInfo): Observable<any> {
            let url = this.baseUrl+"getIssueType";
            return this.httpService.httpPost(issueTypeInfo, url);
    }

    public updateIssueType(issueTypeInfo: IssueTypeInfo): Observable<any> {
            let url = this.baseUrl+"updateIssueType";
            return this.httpService.httpPost(issueTypeInfo, url);
    }


    public authenticate(issueType: IssueTypeInfo): Observable<any> {
        console.log('issueType.service:authenticate')
        let url = this.baseUrl+"getissueType";
        return this.httpService.httpPost(issueType, url);
    }
*/
}