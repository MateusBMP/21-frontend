import * as React from 'react';

import { WithToasts } from '../components/toast';

const SocketProvider = (props) => {
    const { addToast } = props;

    // Adiciona o método addToast ao socket
    props.socket().addToast = addToast;
    props.socket().run();

    return (
        <div id="SocketClient" className="SocketClient" >{props.children}</div>
    );
};

export default WithToasts(SocketProvider);
