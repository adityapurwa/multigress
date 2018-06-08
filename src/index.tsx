import * as ReactDom from 'react-dom';
import * as React from 'react';

import './scss/style.scss';
import App from './pages/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDom.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);