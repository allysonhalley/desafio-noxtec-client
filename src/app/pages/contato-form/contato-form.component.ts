import { Component } from '@angular/core';
import { ContatoService } from '../../core/services/contato.service';
import { ContatoSaveDTO } from '../../models/contato.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./contato-form.component.html",
})
export class ContatoFormComponent {
  contato: ContatoSaveDTO = { nome: '', celular: '' };

  constructor(private service: ContatoService) {}

  salvar() {
    this.service.salvar(this.contato).subscribe();
  }
}
