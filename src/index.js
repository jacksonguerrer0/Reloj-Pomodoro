import React from 'react';
import ReactDOM from 'react-dom';
import AppPomodoro from './container/AppPomodoro';
import './styles/GlobalStyle.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <AppPomodoro />
  </Provider>,
  document.getElementById('root')
);
