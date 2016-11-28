//  -------------------------------------------------------------------
//  user.service.ts
//  -------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { User } from '../models/user.model';
import { UserInfo } from '../models/user-info.model';

@Injectable()

export class UserService {

     private baseUrl = 'http://localhost:28091/api/users/'

    constructor(private http: Http, private httpService: HttpService) { }


    public lookupUsers(user: User): Observable<any> {
            console.log('service:lookupUsers')
            let url = this.baseUrl+"lookupUsers";
            return this.httpService.httpPost(user, url);
    }

    public getUsers(userInfo: UserInfo): Observable<any> {
      console.log('service:getUsers')
      let url = this.baseUrl+"getUsers";
      return this.httpService.httpPost(userInfo, url);
    }

    public getUser(userInfo: UserInfo): Observable<any> {
            let url = this.baseUrl+"getUser";
            return this.httpService.httpPost(userInfo, url);
    }

    public updateUser(userInfo: UserInfo): Observable<any> {
            let url = this.baseUrl+"updateUser";
            return this.httpService.httpPost(userInfo, url);
    }


    public authenticate(user: UserInfo): Observable<any> {
        console.log('user.service:authenticate')
        let url = this.baseUrl+"getuser";
        return this.httpService.httpPost(user, url);
    }
}