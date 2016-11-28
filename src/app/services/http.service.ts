//  -------------------------------------------------------------------
//  http.service.ts
//  -------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';

//import { SessionService } from '../services/session.service';

@Injectable()

export class HttpService {

    constructor(private http: Http) {
    }

    public httpPost(object: any, url: string): Observable<any> {
        //console.log('service:Http')
        let body = JSON.stringify(object);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'q=0.8;application/json;q=0.9');

        /*
        headers.append('Access-Control-All-Origin', 'http://localhost:18197');
        headers.append('Access-Control-All-Methods', 'GET, POST, DELETE');
        headers.append('Access-Control-All-Headers', 'Orgin, X-Requested-With, Content-Type, Accept');
        headers.append('Access-Control-All-Origin', 'http://localhost:18197');
        headers.append('Access-Control-All-Methods', 'GET, POST, DELETE');
        headers.append('Access-Control-All-Headers', 'Orgin, X-Requested-With, Content-Type, Accept');      
        */
        

        /*
        if (typeof (Storage) !== "undefined") {

            let token = localStorage.getItem("CodeProjectAngular2Token");
            headers.append('Authorization', token);
        }
        */

        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options).map((response) => this.parseResponse(response))
            .catch((err) => this.handleError(err));
    }

    private handleError(error: any ) {
        let body = error.json();
        return Observable.throw(body);
    }

    private parseResponse(response: Response, ) {

        /*
        let authorizationToken = response.headers.get("Authorization");
        if (authorizationToken != null) {

            if (typeof (Storage) !== "undefined") {
                localStorage.setItem("CodeProjectAngular2Token", authorizationToken);
            }
        }
        */

        let body = response.json();
        return body;
    }

}