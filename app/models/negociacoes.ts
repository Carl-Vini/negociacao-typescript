import { Negociacao } from "./negociacao.js";

// guarda um lista privada de negociaçoes
export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista():readonly Negociacao[] {
        return this.negociacoes;
    }
}


