import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { TaskModel } from './TaskModel'

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    addUser(user: any): Observable<any> {
        return this.http.post(
            'http://localhost/backend_api/?url=register',
            user
        )
    }

    // methode login qui connecte un user sur le site
    login(user: any): Observable<any> {
        //console.log(user)
        return this.http.post('http://localhost/backend_api/?url=login', user)
    }
}
