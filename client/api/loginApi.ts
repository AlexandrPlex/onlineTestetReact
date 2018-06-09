import axios, { AxiosPromise } from 'axios';
import config from '../../etc/config';

export function authenticationRequest (login: string, password: string): AxiosPromise<any>{
	return axios.post(`${config.apiPrefix}:${config.serverPort}/${config.rootRoutes.auth}`,
				{
					login: login,
					password: password
				})
				.then((response)=>{
					if(response.status === 200 || 304){
						return response;
					}
				})
}
