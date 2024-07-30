import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { TaskService } from '../task.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-add-task',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './add-task.component.html',
    styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
    addTaskForm!: FormGroup
    id: number = 0

    constructor(
        private formBuilder: FormBuilder,
        private taskService: TaskService,
        private route: ActivatedRoute
    ) {
        this.addTaskForm = this.formBuilder.group({
            nom: ['', Validators.required],
            description: ['', Validators.required],
            date: ['', Validators.required],
        })
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id']
    }

    onSubmit(id: number) {
        if (this.id) {
            // Mettre jour une t$ache
            // verifier que le formulaire est valide (les donnees saisies sont valides)
            if (this.addTaskForm.valid) {
                this.taskService
                    .updateTask(this.addTaskForm.value, id)
                    .subscribe({
                        next: (response) => {
                            console.log(response)
                        },
                        error: (error) => {
                            console.error('Login error', error.error)
                        },
                    })
            }
        } else {
            // Ajouter une tâche
            if (this.addTaskForm.valid) {
                this.taskService.addTask(this.addTaskForm.value).subscribe({
                    next: (response) => {
                        console.log(response)
                    },
                    error: (error) => {
                        console.error('Login error', error.error)
                    },
                })
            }
        }
    }
}
