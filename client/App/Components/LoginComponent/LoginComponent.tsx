import * as hash from 'object-hash';
import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {IDispatchProps, LoginActions} from '../../../Actions/LoginAction';
import {ILoginInterfeice} from '../../../Store/StoreRootInterfeice';

import './LoginStyle.css';

interface IStateProps {

}

type TProps = IDispatchProps & IStateProps;

class LoginComponent extends React.PureComponent<TProps, {loginValue: string, passwordValue: string}>{
	constructor(){
		super();
		this.state = {
			loginValue	  : '',
			passwordValue : ''
		}
	}
	onHandleClickLogin = () => {
		if(this.state.loginValue && this.state.passwordValue) {
			this.props.loginActions.onHandelAuthentication(this.state.loginValue, hash.sha1(this.state.passwordValue));
		}
	};
	onHandleChengeLoginValue = (event: any) => {
		return new Promise((resolve)=>{
			this.setState({loginValue: event.target.value});
			resolve();
		});
	};
	onHandleChengePasswordValue = (event: any) => {
		this.setState({passwordValue: event.target.value});
		return new Promise((resolve)=>{
			this.setState({passwordValue: event.target.value});
			resolve();
		});
	};
	render(){
		return <form className="form-signin" onSubmit={(event: any)=>{event.preventDefault();}}>
			<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
			<label htmlFor="inputLogin" className="sr-only">Email address</label>
			<input type="login" className="form-control"
				   placeholder="Login"
				   required
				   autoFocus
				   value={this.state.loginValue}
				   onChange={this.onHandleChengeLoginValue}
			/>
			<label htmlFor="inputPassword" className="sr-only">Password</label>
			<input type="password" className="form-control"
				   placeholder="Password"
				   required
				   value={this.state.passwordValue}
				   onChange={this.onHandleChengePasswordValue}
			/>
			<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onHandleClickLogin}>Sign in</button>
		</form>
	}
}

function mapStateToProps(state: ILoginInterfeice): IStateProps {
	return {
		state,
	};
}

function mapDispatchToProps(dispatch: Dispatch<IDispatchProps>): IDispatchProps {
	return {
		loginActions: new LoginActions(dispatch)
	};
}

const connectApp = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export {connectApp as LoginComponent};

// this.props.editPasswordIsEmpty ? <div className="container-login">
// 	<h1 className="input-wrapper">Ааторизация</h1>
// 	<input value={this.state.loginValue} onChange={this.onHandleChengeLoginValue}
// 		   className={this.props.editLoginIsEmpty ? '' : 'login-input-error'} type="text" name="username"
// 		   placeholder={this.props.editLoginIsEmpty ? 'Логин' : 'Это поле не должно быть пустым'}/>
// 	<input value={this.state.passwordValue} onChange={this.onHandleChengePasswordValue}
// 		   className={this.props.editPasswordIsEmpty ? '' : 'login-input-error'} type="password"
// 		   name="password"
// 		   placeholder={'Пароль'}/>
// 	<input onClick={this.onHandleClickLogin}
// 		   className="login-input" type="submit" name="submit" value="Войти"/>
// 	<a className="a-left">Востановить пароль</a><a className="a-rigth">Регистрация</a>
// </div> : <div className="container-login">
// 	<h1 className="input-wrapper">Ааторизация</h1>
// 	<input value={this.state.loginValue} onChange={this.onHandleChengeLoginValue}
// 		   className={this.props.editLoginIsEmpty ? '' : 'login-input-error'} type="text" name="username"
// 		   placeholder={this.props.editLoginIsEmpty ? 'Логин' : 'Это поле не должно быть пустым'}/>
// 	<input value={this.state.passwordValue} onChange={this.onHandleChengePasswordValue}
// 		   className={this.props.editPasswordIsEmpty ? '' : 'login-input-error'} type="password"
// 		   name="password"
// 		   placeholder={'Это поле не должно быть пустым'}/>
// 	<input onClick={this.onHandleClickLogin}
// 		   className="login-input" type="submit" name="submit" value="Войти"/>
// 	<a className="a-left">Востановить пароль</a><a className="a-rigth">Регистрация</a>
// </div>;
