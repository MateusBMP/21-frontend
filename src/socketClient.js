// @flow
import store from './store/index';
import { servidorUpdateJogador, servidorUpdateSala } from './store/actions/servidorActions';
import type { JogadorState } from './store/reducers/jogadorReducer';
import type { SalaState } from './store/reducers/salaReducer';

export type Request = {
    event: string,
    payload: any,
    hash: string,
};

class SocketClient {
    url: string;
    ws: WebSocket;
    addToast: Function;
    reconnectInterval: ?IntervalID;

    constructor() {
        const env = ((process.env: any): {[string]: string});
        const url = "ws://" + env.REACT_APP_SERVER_HOST + ":" + env.REACT_APP_SERVER_PORT;

        this.url = url;
        this.addToast = (a: string, b: Object) => {};
        this.reconnectInterval = setInterval(this.connect.bind(this), 5000);
    }

    connect(): void {
        if (this.ws === undefined || this.ws.readyState === 3) {
            this.ws = new WebSocket(this.url);
            this.addToast("Conectando no servidor...", { appearance: 'warning' });
        }
    }

    run(): void {
        this.connect();

        this.ws.onclose = event => {
            this.addToast("Você foi desconectado", { appearance: 'warning' });
            console.error({ type: 'WS_CLOSE', payload: event });
            // setTimeout(() => {
            //     this.connect();
            // }, 5000);
        }
        this.ws.onerror = event => {
            this.addToast("Ops! Um erro ocorreu. Veja o log para mais detalhes", { appearance: 'error' });
            console.error({ type: 'WS_ERROR', payload: event });
        }

        this.ws.onmessage = (e: MessageEvent): void => {
            console.log({ type: 'WS_MESSAGE', payload: JSON.parse((e.data: any)) });

            // Ao receber uma mensagem, valida seus dados, transformando-os em um objeto. Caso a
            // resposta seja inválida, notifica o evento no console e para a execução
            try {
                const { event, payload } = JSON.parse((e.data: any));

                // Trata cada evento conhecido, despachando a operação referente a ele
                switch (event) {
                    /**
                     * Jogador foi criado ou atualizado no servidor e precisa ter seus dados
                     * atualizados no cliente. Recebe um objeto jogador inteiro.
                     */
                    case 'JOGADOR_CRIAR':
                        store.dispatch(servidorUpdateJogador((payload: JogadorState)));
                        break;

                    case 'JOGADOR_ATUALIZAR':
                        store.dispatch(servidorUpdateJogador((payload: JogadorState)));
                        break;

                    /**
                     * Se o evento for de atualização da sala, precisa atualizar todos os dados
                     * daquela sala.
                     */
                    case 'SALA_UPDATE_STATUS':
                        store.dispatch(servidorUpdateSala((payload: SalaState)));
                        break;
                
                    default:
                        break;
                }
            } catch (error) {
                this.addToast("Ops! Um erro ocorreu. Veja o log para mais detalhes", { appearance: 'error' });
                console.error({ type: 'WS_ERROR', payload: error });
            }
        }

        this.ws.onopen = event => {
            // Dispara o toast avisando que o jogador se conectou
            this.addToast("Conectado com sucesso!", { appearance: 'success' });
        }
    }

    send(request: Request): void {
        if (this.ws.readyState === 1) {
            console.log({ type: 'WS_SEND', payload: request });
            this.ws.send(JSON.stringify(request));
        }
    }
}

class FSocket {
    static instance: SocketClient;

    static getInstance(): SocketClient {
        if (FSocket.instance === undefined) {
            FSocket.instance = new SocketClient();
        }

        return FSocket.instance;
    }
}

export const updateJogadorEvent = (jogador: JogadorState): Request => {
    return { event: 'JOGADOR_ATUALIZAR_DADOS', payload: jogador, hash: btoa(Math.random().toString(36).substring(7)) };
};

export const conectarSalaEvent = (sala: string): Request => {
    return { event: 'JOGADOR_ENTRAR_SALA', payload: sala, hash: btoa(Math.random().toString(36).substring(7)) };
}

const socket = (): SocketClient => FSocket.getInstance();

export default socket;
