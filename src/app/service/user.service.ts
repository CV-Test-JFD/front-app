import { environment } from './../../environments/environment.prod';
import { IUser } from './../interface/user.interface';

import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class UserService {

    apiEndPoint: string = environment.apiEndPoint;
    constructor(private httpClient: HttpClient) { }

    createUser(user: IUser): Observable<HttpResponse<any>> {
        return this.httpClient.post(`${this.apiEndPoint}/user`, user, { observe: 'response' });
    }
    getUserList(): Observable<HttpResponse<any>> {
        let userList: IUser[];
        return this.httpClient.get(`${this.apiEndPoint}/user`, { observe: 'response' });
    }
    getUser(id: number): Observable<HttpResponse<any>> {
        return this.httpClient.get(`${this.apiEndPoint}/user/${id}`, { observe: 'response' });
    }
    deleteUser(id: any): Observable<any> {
        return this.httpClient.delete(`${this.apiEndPoint}/user/${id}`);
    }

}
