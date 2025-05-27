export interface Contato {
  id?: string;
  nome: string;
  email?: string;
  celular: string;
  telefone?: string;
  favorito?: string;
  ativo?: string;
  dataCadastro?: string;
}

export interface ContatoFiltroBuscaDTO {
  nome?: string;
  email?: string;
  celular?: string;
}

export interface ContatoSaveDTO {
  nome: string;
  email?: string;
  celular: string;
  telefone?: string;
}
