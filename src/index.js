import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux'

import SocketProvider from './providers/socketProvider';
import CustomToast from './components/toast';
import socketClient from './socketClient';
import store from './store/index';
import Routes from './Routes';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider components={{ Toast: CustomToast }} autoDismiss>
        <SocketProvider socket={socketClient}>
          <Routes />
        </SocketProvider>
      </ToastProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
