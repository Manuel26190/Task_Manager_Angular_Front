import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { TaskModel } from './TaskModel'

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    constructor(private http: HttpClient) {}

    // methode qui recuperer toutes les taches
    getAllTasks(): Observable<any> {
        let token = localStorage.getItem('token')
        let headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        })
        //console.log('service getAll ok', headers)
        //console.log('service getAll ok', token)
        return this.http.get('http://localhost/backend_api/?url=tasks', {
            headers: headers,
        })
    }

    // methode qui ajoute une tache
    addTask(task: any): Observable<any> {
        let token = localStorage.getItem('token')
        let headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        })
        // console.log('service add ok', headers)
        // console.log('service add ok', token)
        return this.http.post(
            'http://localhost/backend_api/?url=add_task',
            task,
            {
                headers: headers,
            }
        )
    }

    // methode qui supprime une tache
    deleteTask(id: number): Observable<any> {
        return this.http.get(
            `http://localhost/backend_api/?url=remove_task&id=${id}`
        )
    }

    // methode qui modifie une tache
    updateTask(data: TaskModel, id: number): Observable<any> {
        let token = localStorage.getItem('token')
        let headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        })
        //console.log('service update ok', headers)
        //console.log('service update ok', token)
        return this.http.post(
            `http://localhost/backend_api/?url=update_task&id=${id}`,
            data,
            {
                headers: headers,
            }
        )
    }

    // Méthode pour changer le statut à complété d'une tâche
    completedTask(id: number): Observable<any> {
        return this.http.get(
            `http://localhost/backend_api/?url=complete_task&id=${id}`
        )
    }
}
