import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AllRoutes from './routes/client-routes';
import './styles.scss';

ReactDOM.render(<Provider store={store}>

  <AllRoutes />

</Provider>, document.getElementById('root'));
