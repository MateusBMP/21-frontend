import * as React from 'react';
import { connect } from 'react-redux';
import Carousel from 'bootstrap/js/dist/carousel';
import Cleave from 'cleave.js/react';

import { WithHistory } from '../../components/router';
import { WithToasts } from '../../components/toast';
import { nomeIsValid } from '../../helpers/jogador';
import { codigoIsValid } from '../../helpers/sala';
import { jogadorSetNome } from '../../store/actions/jogadorActions';
import { salaSetCodigo } from '../../store/actions/salaActions';
import { criarSala, buscarSala } from '../../service/salaService';
import socket, { updateJogadorEvent } from '../../socketClient';
import './Entrar.css';

class Entrar extends React.Component {
    static carousel = null;

    constructor(props) {
        super(props);

        this.state = {
            carouselItemAtivo: 0
        };

        this.handleChangeCarouselItemAtivo = this.handleChangeCarouselItemAtivo.bind(this);
        this.handleCriarSala = this.handleCriarSala.bind(this);
        this.handleEntrarNaSala = this.handleEntrarNaSala.bind(this);
        this.handleIrParaSala = this.handleIrParaSala.bind(this);
    }

    componentDidMount() {
        // Cria o carousel
        let elementCarouselEntrar = document.querySelector('#carouselEntrar');
        this.carousel = new Carousel(elementCarouselEntrar, {
            interval: false,
            keyboard: false,
            touch: false,
            pause: false,
        });
    }

    componentWillUnmount() {
        // dispensa o carousel
        this.carousel.dispose();
        this.carousel = null;
    }

    handleChangeCarouselItemAtivo(item, e) {
        e.preventDefault();
        this.carousel.to(item);
        this.setState({ carouselItemAtivo: Number(item) });
    }

    handleCriarSala(e) {
        e.preventDefault();

        // Tenta criar a sala e, caso não dê certo, notifica o erro
        if (!criarSala()) {
            this.props.addToast("Sala não pôde ser criada. Tente novamente", { appearance: 'error' });
            return;
        };

        this.handleIrParaSala(this.props.sala.codigo, e);
    }

    handleEntrarNaSala(e) {
        e.preventDefault();

        // Tenta buscar a sala e, caso não a encontre, notifica o erro
        if (!buscarSala(this.props.sala.codigo)) {
            this.props.addToast("Sala não encontrada. Tente novamente", { appearance: 'error' });
            return;
        }

        this.handleIrParaSala(this.props.sala.codigo, e);
    }

    handleIrParaSala(sala, e) {
        // Se o jogador não estiver conectado, notifica um aviso e tenta reconectar
        if (socket().ws.readyState !== 1) {
            this.props.addToast("Você está offline!", { appearance: 'error' });
            socket().connect();
            return;
        }

        this.handleChangeCarouselItemAtivo(2, e);

        // Notifica o servidor da atualização do jogador
        socket().send(updateJogadorEvent(this.props.jogador));

        // Espera dois segundos antes de atualizar
        setTimeout(() => {
            // Muda para a página da sala
            this.props.history.push(String('/sala/').concat(this.props.sala.codigo));
        }, 3000);
    }

    _screenZero() {
        let classData = this.state.carouselItemAtivo === 0 ? 
            String("carouselEntrar-screen0 carousel-item active h-100 px-5 d-flex flex-column justify-content-center") :
            String("carouselEntrar-screen0 carousel-item h-100 px-5");

        return (
            <div className={classData}>
                <h6 className="text-center fw-bold">Escolha um nome de jogador:</h6>
                <Cleave id="nomeDoJogador" options={{blocks: [7]}} value={this.props.jogador.nome} onChange={(e) => this.props.jogadorSetNome(e.target.value)} placeholder="jogador" className="form-control form-control-sm form-color-pink mt-2" />
                { nomeIsValid(this.props.jogador.nome) ? (
                    <div className="d-grip gap-2 mt-4">
                        <button type="button" className="btn btn-sm btn-outline-pink px-3 w-100" data-bs-target="#carouselEntrar" onClick={(e) => this.handleChangeCarouselItemAtivo(1, e)}>buscar sala</button>
                        <button type="button" className="btn btn-sm btn-outline-pink px-3 w-100" data-bs-target="#carouselEntrar" onClick={(e) => this.handleCriarSala(e)}>criar sala</button>
                    </div>
                ) : (
                    <div className="d-grip gap-2 mt-4">
                        <button type="button" className="btn btn-sm btn-outline-pink px-3 w-100" disabled>buscar sala</button>
                        <button type="button" className="btn btn-sm btn-outline-pink px-3 w-100" disabled>criar sala</button>
                    </div>
                )}
            </div>
        );
    }

    _screenOne() {
        let classData = this.state.carouselItemAtivo === 1 ? 
            String("carouselEntrar-screen1 carousel-item active h-100 px-5 d-flex flex-column justify-content-center") :
            String("carouselEntrar-screen1 carousel-item h-100 px-5");

        return (
            <div className={classData}>
                <h6 className="text-center fw-bold">Informe o código da sala:</h6>
                <Cleave id="codigoDaSala" options={{blocks: [5], uppercase: true}} value={this.props.sala.codigo} onChange={(e) => this.props.salaSetCodigo(e.target.value)} placeholder="sala" className="form-control form-control-sm form-color-pink mt-2" />
                <div className="d-grip gap-2 mt-4">
                    { codigoIsValid(this.props.sala.codigo) ? (
                        <button type="button" className="btn btn-sm btn-outline-pink px-3 w-100" data-bs-target="#carouselEntrar" onClick={(e) => this.handleEntrarNaSala(e)}>entrar</button>
                    ) : (
                        <button type="button" className="btn btn-sm btn-outline-pink px-3 w-100" disabled>entrar</button>
                    )}
                    <button type="button" className="btn btn-sm btn-outline-secondary px-3 w-100" data-bs-target="#carouselEntrar" onClick={(e) => this.handleChangeCarouselItemAtivo(0, e)}>voltar</button>
                </div>
            </div>
        );
    }

    _screenTwo() {
        let classData = this.state.carouselItemAtivo === 2 ? 
            String("carouselEntrar-screen2 carousel-item active h-100 px-5 d-flex flex-column justify-content-center") :
            String("carouselEntrar-screen2 carousel-item h-100 px-5");

        return (
            <div className={classData}>
                <h6 className="text-center fw-bold">Iniciando...</h6>
            </div>
        );
    }

    render() {
        return (
            <div className="Entrar position-relative vh-100">
                <header id="carouselEntrar" className="Entrar-header carousel slide w-100 h-100">
                    <div className="carousel-inner h-100">
                        { this._screenZero() }
                        { this._screenOne() }
                        { this._screenTwo() }
                    </div>
                </header>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    jogador: state.jogadorReducer,
    sala: state.salaReducer,
});

const mapActionToProps = {
    jogadorSetNome,
    salaSetCodigo
};

export default connect(mapStateToProps, mapActionToProps)(WithHistory(WithToasts(Entrar)));