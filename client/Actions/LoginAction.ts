import {Dispatch} from 'redux';
import {authenticationRequest} from '../api/loginApi';
import {IAsyncLoginActionTypes, ILoginActionTypes} from '../Constants/LoginConstans';

export interface IDispatchProps {
	loginActions: LoginActions;
}

export class LoginActions {
	constructor(private dispatch: Dispatch<IDispatchProps>) {
	}
	onHandelAuthentication = (login: string, password: string) => {
		this.dispatch({type: `${ILoginActionTypes.AUTH}${IAsyncLoginActionTypes.BEGIN}`});
		authenticationRequest(login, password)
	};
	onChengeEditLoginValueIsEmpty = (value: boolean) => {
		this.dispatch({type: `${ILoginActionTypes.CHANGE_LOGIN_VALUE}`, payload: value})
	};
	onChengeEditPasswordValueIsEmpty = (value: boolean) => {
		this.dispatch({type: `${ILoginActionTypes.CHANGE_PASSWORD_VALUE}`, payload: value})
	};
}
