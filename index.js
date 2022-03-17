/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {store} from './store';
import {Provider} from 'react-redux';

const SHOPPING = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('shopping', () => SHOPPING);
