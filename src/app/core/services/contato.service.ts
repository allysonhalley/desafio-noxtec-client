import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato, ContatoFiltroBuscaDTO, ContatoSaveDTO } from '../../models/contato.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContatoService {
  private api = 'http://localhost:8080/api/contatos';
  private http = inject(HttpClient);

  listar(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.api);
  }

  buscarPorId(id: string): Observable<Contato> {
    return this.http.get<Contato>(`${this.api}/${id}`);
  }

  buscarPorFiltros(filtro: ContatoFiltroBuscaDTO): Observable<Contato[]> {
    return this.http.post<Contato[]>(`${this.api}/buscar`, filtro);
  }

  salvar(contato: ContatoSaveDTO): Observable<Contato> {
    return this.http.post<Contato>(this.api, contato);
  }

  atualizar(id: string, contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.api}/${id}`, contato);
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  marcarFavorito(id: string): Observable<Contato> {
    return this.http.post<Contato>(`${this.api}/marcar_favorito`, id, { headers: { 'Content-Type': 'application/json' } });
  }

  desmarcarFavorito(id: string): Observable<Contato> {
    return this.http.post<Contato>(`${this.api}/desmarcar_favorito`, id, { headers: { 'Content-Type': 'application/json' } });
  }

  inativar(id: string): Observable<Contato> {
    return this.http.post<Contato>(`${this.api}/inativar`, id, { headers: { 'Content-Type': 'application/json' } });
  }
}
