import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route} from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';



ReactDOM.render(
  <Provider store ={store}>
   <React.StrictMode>
     <PersistGate persistor={persistor}>
        <App/>
     </PersistGate>
     </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

