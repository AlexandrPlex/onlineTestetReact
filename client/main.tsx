import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {appStore} from './Store/Store';

ReactDOM.render(
  <Provider store={appStore}>
    <h1> Hellow </h1>
  </Provider>,
  document.getElementById('app')
);
