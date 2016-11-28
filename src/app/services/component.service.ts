//  -------------------------------------------------------------------
//  component.service.ts
//  -------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { MyComponent } from '../models/component.model';
//import { ComponentInfo } from '../models/component-info.model';

@Injectable()

export class ComponentService {

     private baseUrl = 'http://localhost:28091/api/'

    constructor(private http: Http, private httpService: HttpService) { }

    public lookupComponents(component: MyComponent): Observable<any> {
            console.log('service:lookupComponents')
            let url = this.baseUrl+"lookupComponents";
            return this.httpService.httpPost(component, url);
    }

/*
    public getComponents(componentInfo: ComponentInfo): Observable<any> {
      console.log('component.service:getComponents')
      let url = this.baseUrl+"getComponents";
      return this.httpService.httpPost(componentInfo, url);
    }

    public getComponent(componentInfo: ComponentInfo): Observable<any> {
            let url = this.baseUrl+"getComponent";
            return this.httpService.httpPost(componentInfo, url);
    }

    public updateComponent(componentInfo: ComponentInfo): Observable<any> {
            let url = this.baseUrl+"updateComponent";
            return this.httpService.httpPost(componentInfo, url);
    }


    public authenticate(component: ComponentInfo): Observable<any> {
        console.log('component.service:authenticate')
        let url = this.baseUrl+"getcomponent";
        return this.httpService.httpPost(component, url);
    }
*/
}