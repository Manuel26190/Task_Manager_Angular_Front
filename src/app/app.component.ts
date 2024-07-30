import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'front_angular'
}
