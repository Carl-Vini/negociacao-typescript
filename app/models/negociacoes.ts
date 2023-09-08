import { Negociacao } from "./negociacao.js";

// guarda um lista privada de negociaçoes
export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista():ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}


