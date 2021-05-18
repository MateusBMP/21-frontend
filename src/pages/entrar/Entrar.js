import './Entrar.css';
import React from 'react';
import Singleton from '../../data/Singleton';
// import { Link } from 'react-router-dom';

class Entrar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            screen: Number(1),
            jogador: String(Singleton.jogador.nome),
            sala: String(Singleton.sala.codigo),
        };

        this.handleChangeScreen = this.handleChangeScreen(this);
        this.handleChangeNomeDoJogador = this.handleChangeNomeDoJogador.bind(this);
        this.handleChangeCodigoDaSala = this.handleChangeCodigoDaSala.bind(this);
    }

    handleChangeScreen(event) {
        this.setState({ screen: Number(event.target.value) });
    }

    handleChangeNomeDoJogador(event) {
        this.setState({ jogador: String(event.target.value) });
        Singleton.jogador.nome = String(event.target.value);
    }

    handleChangeCodigoDaSala(event) {
        this.setState({ sala: String(event.target.value) });
        Singleton.sala.codigo = String(event.target.value);
    }

    _screenOne() {
        const classData = String("carousel-item active h-100 px-5 ").concat( Number(this.state.screen) === 1 ? "d-flex flex-column justify-content-center" : "");

        return (
            <div className={classData}>
                <h6 className="text-center fw-bold">Escolha um nome de jogador:</h6>
                <input type="text" id="nomeDoJogador" value={this.state.jogador} onChange={this.handleChangeNomeDoJogador} placeholder="jogador" className="form-control form-control-sm form-color-pink mt-2" />
                { String(this.state.jogador).length > 2 ? (
                    <div className="d-grip gap-2 mt-4">
                        <button type="button" className="btn btn-sm btn-outline-pink px-3 w-100" data-bs-target="#carouselEntrar" data-bs-slide-to="1" onClick={this.handleChangeScreen()}>entrar</button>
                        <button type="button" className="btn btn-sm btn-outline-pink px-3 w-100" data-bs-target="#carouselEntrar" data-bs-slide-to="2">criar sala</button>
                    </div>
                ) : (
                    <div className="d-grip gap-2 mt-4">
                        <button type="button" className="btn btn-sm btn-outline-pink px-3 w-100" disabled>entrar</button>
                        <button type="button" className="btn btn-sm btn-outline-pink px-3 w-100" disabled>criar sala</button>
                    </div>
                )}
            </div>
        );
    }

    _screenTwo() {
        const classData = String("carousel-item h-100 px-5 ").concat( Number(this.state.screen) === 2 ? "d-flex flex-column justify-content-center" : "");

        return (
            <div className={classData}>
                <h6 className="text-center fw-bold">Informe o código da sala:</h6>
                <input type="text" id="codigoDaSala" value={this.state.sala} onChange={this.handleChangeCodigoDaSala} placeholder="sala" className="form-control form-control-sm form-color-pink mt-2" />
            </div>
        );
    }

    _screenThree() {
        const classData = String("carousel-item h-100 px-5 ").concat( Number(this.state.screen) === 3 ? "d-flex flex-column justify-content-center" : "");

        return (
            <div className={classData}>
                <h6 className="text-center fw-bold">Iniciando...</h6>
            </div>
        );
    }

    render() {
        return (
            <div className="Entrar position-relative vh-100">
                <header id="carouselEntrar" className="Entrar-header carousel slide w-100 h-100" data-bs-interval="false" data-bs-keyboard="false" data-bs-pause="false">
                    <div className="carousel-inner h-100">
                        { this._screenOne() }
                        { this._screenTwo() }
                        { this._screenThree() }
                    </div>
                </header>
            </div>
        )
    }
}

export default Entrar;