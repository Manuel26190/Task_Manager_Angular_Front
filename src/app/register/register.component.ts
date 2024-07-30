import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
    FormGroup,
    FormBuilder,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms'
import { UserService } from '../user.service'

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {
    registerForm!: FormGroup

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService
    ) {
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            nom: ['', [Validators.required]],
            prenom: ['', [Validators.required]],
        })
    }

    onSubmit() {
        // verifier que le formulaire est valide (les donnees saisies sont valides)
        if (this.registerForm.valid) {
            // appel du service adequat
            this.userService.addUser(this.registerForm.value).subscribe({
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
