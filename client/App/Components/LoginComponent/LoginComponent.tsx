import * as hash from 'object-hash';
import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {IDispatchProps, LoginActions} from '../../../Actions/LoginAction';
import {IStoreState} from '../../../Store/StoreCollections/LoginStore';
import './LoginStyle.css';

interface IStateProps {
	editLoginIsEmpty: boolean;
	editPasswordIsEmpty: boolean;
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

		this.props.loginActions.onHandelAuthentication(this.state.loginValue, hash.sha1(this.state.passwordValue));
	};
	onHandleChengeLoginValue = (event: any) => {
		return new Promise((resolve)=>{
			this.setState({loginValue: event.target.value});
			resolve();
		}).then(()=>{
			this.props.loginActions.onChengeEditLoginValueIsEmpty(Boolean(this.state.loginValue));
		})
	};
	onHandleChengePasswordValue = (event: any) => {
		this.setState({passwordValue: event.target.value});
		return new Promise((resolve)=>{
			this.setState({passwordValue: event.target.value});
			resolve();
		}).then(()=>{
			this.props.loginActions.onChengeEditPasswordValueIsEmpty(Boolean(this.state.passwordValue));
		})
	};
	render(){
		return <div className="container-login">
			<h1>Ааторизация</h1>
			<input value={this.state.loginValue} onChange={this.onHandleChengeLoginValue}
				   className={!this.props.editLoginIsEmpty ? null : 'login-input-error'} type="text" name="username" placeholder="Логин"/>
			<input value={this.state.passwordValue} onChange={this.onHandleChengePasswordValue}
				   className={!this.props.editPasswordIsEmpty ? null : 'login-input-error'} type="password" name="password" placeholder="Пароль"/>
			<input onClick={this.onHandleClickLogin}
				   className="login-input" type="submit" name="submit" value="Войти"/>
			<a className="a-left">Востановить пароль</a><a className="a-rigth">Регистрация</a>
		</div>;
	}
}

function mapStateToProps(state: IStoreState): IStateProps {
	return {
		editLoginIsEmpty: state.editLoginIsEmpty,
		editPasswordIsEmpty: state.editPasswordIsEmpty
	};
}

function mapDispatchToProps(dispatch: Dispatch<IDispatchProps>): IDispatchProps {
	return {
		loginActions: new LoginActions(dispatch)
	};
}

const connectApp = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export {connectApp as LoginComponent};
