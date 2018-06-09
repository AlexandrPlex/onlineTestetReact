import {Action} from 'redux';
import {IAsyncLoginActionTypes, ILoginActionTypes} from '../../Constants/LoginConstans';

export interface IActionType extends Action {
	type: string;
	payload: any;
}

export interface IStoreState {
	loginState: boolean;
	loadingState: boolean;
	serverConnect: boolean;
	dataAuthError: boolean;
	editLoginIsEmpty: boolean;
	editPasswordIsEmpty: boolean;
}

const initialState = {
	get state(): IStoreState {
		return {
			loginState: false,
			loadingState: false,
			serverConnect: true,
			dataAuthError: true,
			editLoginIsEmpty: true,
			editPasswordIsEmpty: true,
		}
	}
}

export default function loginReducer (state: IStoreState = initialState.state, action: IActionType) {
	switch (action.type) {
		case `${ILoginActionTypes.AUTH}${IAsyncLoginActionTypes.BEGIN}`:
			return {
				...state,
			};
		case `${ILoginActionTypes.AUTH}${IAsyncLoginActionTypes.SUCCESS}`:
			return {
				...state,
			};
		case `${ILoginActionTypes.AUTH}${IAsyncLoginActionTypes.FAILURE}`:
			return {
				...state,
			};
		case `${ILoginActionTypes.CHANGE_LOGIN_VALUE}`:
			return {
				...state,
				editLoginIsEmpty: action.payload
			};
		case `${ILoginActionTypes.CHANGE_PASSWORD_VALUE}`:
			return {
				...state,
				editPasswordIsEmpty: action.payload
			};
	}
	return state;
}
