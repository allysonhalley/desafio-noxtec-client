import { Routes } from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';
import {ContatoListComponent} from './pages/contato-list/contato-list.component';
import {ContatoFormComponent} from './pages/contato-form/contato-form.component';
import {LoginComponent} from './pages/login/login.component';

export const routes: Routes = [
  { path: 'contatos', component: ContatoListComponent, canActivate: [AuthGuard] },
  { path: 'novo', component: ContatoFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'contatos', pathMatch: 'full' },
  { path: '**', redirectTo: 'contatos' }
];
