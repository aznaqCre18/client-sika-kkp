import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import './style/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
