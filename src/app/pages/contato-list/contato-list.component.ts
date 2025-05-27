import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../core/services/contato.service';
import { Contato, ContatoFiltroBuscaDTO } from '../../models/contato.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato-list.component.html',
})
export class ContatoListComponent implements OnInit {
  contatos: Contato[] = [];
  filtro: ContatoFiltroBuscaDTO = {};

  constructor(private service: ContatoService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.listar().subscribe(dados => this.contatos = dados);
  }

  buscar() {
    this.service.buscarPorFiltros(this.filtro).subscribe(dados => this.contatos = dados);
  }

  marcarFavorito(contato: Contato) {
    if (contato.id)
      this.service.marcarFavorito(contato.id).subscribe(c => contato.favorito = c.favorito);
  }

  desmarcarFavorito(contato: Contato) {
    if (contato.id)
      this.service.desmarcarFavorito(contato.id).subscribe(c => contato.favorito = c.favorito);
  }

  inativar(contato: Contato) {
    if (contato.id)
      this.service.inativar(contato.id).subscribe(c => contato.ativo = c.ativo);
  }

  excluir(contato: Contato) {
    if (contato.id)
      this.service.excluir(contato.id).subscribe(() => this.listar());
  }
}
