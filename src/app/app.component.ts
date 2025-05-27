import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContatoListComponent} from './pages/contato-list/contato-list.component';
import {ContatoFormComponent} from './pages/contato-form/contato-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContatoFormComponent, ContatoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-noxtec-client';
}
