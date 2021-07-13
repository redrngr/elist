import { combineReducers } from 'redux';
import list from './reducers/list-reducer';
import card from './reducers/card-reducer';
import auth from './reducers/auth-reducer';
import add from './reducers/add-reducer';

export default combineReducers({ list, card, auth, add });