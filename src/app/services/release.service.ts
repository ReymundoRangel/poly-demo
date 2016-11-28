//  -------------------------------------------------------------------
//  release.service.ts
//  -------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { Release } from '../models/release.model';
//import { ReleaseInfo } from '../models/release-info.model';

@Injectable()

export class ReleaseService {

     private baseUrl = 'http://localhost:28091/api/releases/'

    constructor(private http: Http, private httpService: HttpService) { }

    public lookupReleases(release: Release): Observable<any> {
            console.log('service:lookupReleases')
            let url = this.baseUrl+"lookupReleases";
            return this.httpService.httpPost(release, url);
    }

/*
    public getReleases(releaseInfo: ReleaseInfo): Observable<any> {
      console.log('release.service:getReleases')
      let url = this.baseUrl+"getReleases";
      return this.httpService.httpPost(releaseInfo, url);
    }

    public getRelease(releaseInfo: ReleaseInfo): Observable<any> {
            let url = this.baseUrl+"getRelease";
            return this.httpService.httpPost(releaseInfo, url);
    }

    public updateRelease(releaseInfo: ReleaseInfo): Observable<any> {
            let url = this.baseUrl+"updateRelease";
            return this.httpService.httpPost(releaseInfo, url);
    }


    public authenticate(release: ReleaseInfo): Observable<any> {
        console.log('release.service:authenticate')
        let url = this.baseUrl+"getrelease";
        return this.httpService.httpPost(release, url);
    }
*/
}