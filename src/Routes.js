// @flow
import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Entrar from "./pages/entrar/Entrar";
import Home from "./pages/home/Home";

class Routes extends React.Component<{}> {

    render(): React.Node {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/entrar" component={Entrar} />
            </BrowserRouter>
        );
    }
}

export default Routes;
