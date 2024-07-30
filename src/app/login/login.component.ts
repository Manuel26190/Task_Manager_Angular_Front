import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms'
import { UserService } from '../user.service'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    loginForm: FormGroup

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private router: Router
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        })
    }

    // methode faisant appel login definie dans le UserService
    submit() {
        if (this.loginForm.valid) {
            this.userService.login(this.loginForm.value).subscribe({
                next: (response) => {
                    //console.log(response.token)
                    // enregistrer le token dan le localStorage
                    localStorage.setItem('token', response.token)
                    // console.log(localStorage.getItem('token'));
                    this.router.navigateByUrl('/')
                },
                error: (error) => {
                    console.log(error)
                },
            })
        }
    }
}
