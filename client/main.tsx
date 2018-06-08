import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {appStore} from './Store/Store';

//Собственные компоненты
import App from './App/App'

ReactDOM.render(
  <Provider store={appStore}>
  	<App/>
  </Provider>,
  document.getElementById('app')
);
