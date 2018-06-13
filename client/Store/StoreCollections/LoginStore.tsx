import {Action} from 'redux';
import {IAsyncLoginActionTypes, ILoginActionTypes} from '../../Constants/LoginConstans';

export interface IActionType extends Action {
	type: string;
	payload: any;
}

export interface ILoginStoreState {
	loginState: boolean;
	loadingState: boolean;
	serverConnect: boolean;
	dataAuthError: boolean;
}

const initialState = {
	get state(): ILoginStoreState {
		return {
			loginState: false,
			loadingState: false,
			serverConnect: true,
			dataAuthError: true,
		}
	}
}

export default function loginReducer (state: ILoginStoreState = initialState.state, action: IActionType) {
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
	}
	return state;
}
