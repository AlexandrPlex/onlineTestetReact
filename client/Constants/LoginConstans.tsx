export enum ILoginActionTypes{
	AUTH = 'AUTH_REQUEST',
	CHANGE_LOGIN_VALUE = 'CHANGE_LOGIN_VALUE_IS_EMPTY',
	CHANGE_PASSWORD_VALUE = 'CHANGE_PASSWORD_VALUE_IS_EMPTY',
}

export enum IAsyncLoginActionTypes{
	BEGIN = '_BEGIN',
	SUCCESS = '_SUCCESS',
	FAILURE = '_FAILURE'
}