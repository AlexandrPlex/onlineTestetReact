import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import loginReducer from './StoreCollections/LoginStore';

const rootReducers = combineReducers({
	loginReducer
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export {store as appStore};
