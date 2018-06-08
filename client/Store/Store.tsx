import {Action, applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export interface IActionType extends Action {
  type: string;
  payload: any;
}

export interface IStoreState {

}

const initialState = {
  get state(): IStoreState {
	return {

	}
  }
}

export default function reducer (state: IStoreState = initialState.state, action: IActionType) {
  switch (action.type) {

  }
  return state;
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export {store as appStore};
