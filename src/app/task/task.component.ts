import { Component } from '@angular/core'
import { TaskModel } from '../TaskModel'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { TaskService } from '../task.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-task',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './task.component.html',
    styleUrl: './task.component.scss',
})
export class TaskComponent {
    listTasks!: TaskModel[]
    id: number = 0

    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute
    ) {}

    // Afficher toutes les tâches du user connecté
    ngOnInit(): void {
        this.id = this.route.snapshot.params['id']

        this.taskService.getAllTasks().subscribe({
            next: (response) => {
                //console.log(response.data)
                this.listTasks = response.data
            },
            error: (error) => {
                console.log(error)
            },
        })
    }

    // Delete task
    removeTask(id: number) {
        this.taskService.deleteTask(id).subscribe({
            next: (response) => {
                console.log(response)
                this.taskService.getAllTasks().subscribe({
                    next: (response) => {
                        //console.log(response.data)
                        this.listTasks = response.data
                    },
                    error: (error) => {
                        console.log(error)
                    },
                })
            },
            error: (error) => {
                console.log(error)
            },
        })
    }

    // Complete task
    completeTask(id: number) {
        this.taskService.completedTask(id).subscribe({
            next: (response) => {
                //console.log('id completed', id)
                console.log(response)
                //console.log(this.listTasks)
                this.taskService.getAllTasks().subscribe({
                    next: (response) => {
                        //console.log(response.data)
                        this.listTasks = response.data
                    },
                    error: (error) => {
                        console.log(error)
                    },
                })
            },
        })
    }

    getTaskStatusClass(status: string): string {
        return status.toLowerCase().replace(' ', '-')
    }
}
