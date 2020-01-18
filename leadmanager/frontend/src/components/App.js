import React, { Fragment } from 'react';

// react-alert
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';

// alert-options
const alertOptions = {
  timeout: 1500,
  position: 'top center'
};

const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Fragment>
          <Header />
          <Alerts />
          <div className='container'>
            <Dashboard />
          </div>
        </Fragment>
      </AlertProvider>
    </Provider>
  );
};

export default App;
