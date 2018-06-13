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
		return new Promise(()=>{
			authenticationRequest(login, password)
		});
	};
}
