import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {Routes}
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
