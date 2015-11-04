import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {GameContainer} from './containers/Game';
import tictactoeApp from './reducers';

let store = createStore(tictactoeApp);
require('./scss/app.scss');


let rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <GameContainer />
  </Provider>,
  rootElement
);
console.log('I am alive!');
