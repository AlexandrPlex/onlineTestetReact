import * as React from 'react';
import './LoginStyle.css';

class LoginComponent extends React.PureComponent<{loginValue: string, passwordValue: string}>{
	constructor(){
		super();
		this.state = {
			loginValue	  : '',
			passwordValue : ''
		}
	}
	onHandleClickLogin = () => {
		alert( this.state.);
	};
	render(){
		return <div className="container-login">
			<h1>Ааторизация</h1>
			<input className="login-input" type="text" name="username" placeholder="Логин"/>
			<input className="login-input" type="password" name="password" placeholder="Пароль"/>
			<input className="login-input" onClick={this.onHandleClickLogin} type="submit" name="submit" value="Войти"/>
			<a className="a-left">Востановить пароль</a><a className="a-rigth">Регистрация</a>
		</div>;
	}
}

export default LoginComponent;
