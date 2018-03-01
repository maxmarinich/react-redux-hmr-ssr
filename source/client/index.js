import 'babel-polyfill';
import './styles/styles.sass';
import React from 'react';
import ReactDOM  from 'react-dom';
import AppRouter from './app/AppRouter';

ReactDOM.hydrate(<AppRouter/>, document.getElementById('root'));

//Hot Module Replacement API
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
