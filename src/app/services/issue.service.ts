//  -------------------------------------------------------------------
//  issue.service.ts
//  -------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { Issue } from '../models/issue.model';
import { ViewIssue } from '../models/viewIssue.model';

//import { IssueInfo } from '../models/issue-info.model';

@Injectable()

export class IssueService {

     private baseUrl = 'http://localhost:28091/api/'

    constructor(private http: Http, private httpService: HttpService) { }

    public lookupIssues(issue: Issue): Observable<any> {
            console.log('service:lookupIssues')
            let url = this.baseUrl+"lookupIssues";
            return this.httpService.httpPost(issue, url);
    }

    public viewIssues(viewIssue: ViewIssue): Observable<any> {
            console.log('service:viewIssues')
            let url = this.baseUrl+"ViewIssues";
            return this.httpService.httpPost(viewIssue, url);
    }



/*
    public getIssues(issueInfo: IssueInfo): Observable<any> {
      console.log('issue.service:getIssues')
      let url = this.baseUrl+"getIssues";
      return this.httpService.httpPost(issueInfo, url);
    }

    public getIssue(issueInfo: IssueInfo): Observable<any> {
            let url = this.baseUrl+"getIssue";
            return this.httpService.httpPost(issueInfo, url);
    }

    public updateIssue(issueInfo: IssueInfo): Observable<any> {
            let url = this.baseUrl+"updateIssue";
            return this.httpService.httpPost(issueInfo, url);
    }


    public authenticate(issue: IssueInfo): Observable<any> {
        console.log('issue.service:authenticate')
        let url = this.baseUrl+"getissue";
        return this.httpService.httpPost(issue, url);
    }
*/
}