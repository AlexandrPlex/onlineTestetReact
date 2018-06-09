import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Собственные компоненты
import {LoginComponent} from './Components/LoginComponent/LoginComponent';

class App extends React.Component {
	render() {
		return <BrowserRouter>
			<Switch>
				<Route exact path="/" component={LoginComponent}/>
			</Switch>
		</BrowserRouter>;
	}
};

export default App;
