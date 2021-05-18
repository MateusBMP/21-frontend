// @flow

type Jogador = { nome: string };
type Sala = { codigo: string };

class Singleton {
    static instance: Singleton;

    jogador: Jogador;
    sala: Sala;

    constructor() {
        this.jogador = {
            nome: ""
        };
        this.sala = {
            codigo: ""
        }
    }

    static getInstance(): Singleton {
        if (Singleton.instance === undefined) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

export default (Singleton.getInstance(): Singleton);
