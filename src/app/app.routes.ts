import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { TaskComponent } from './task/task.component'
import { AddTaskComponent } from './add-task/add-task.component'

export const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'task', component: TaskComponent },
    { path: 'add-task', component: AddTaskComponent },
    { path: 'add-task/:id', component: AddTaskComponent },
]
