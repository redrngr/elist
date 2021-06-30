import { combineReducers } from 'redux';
import list from './reducers/list-reducer';
import navbar from './reducers/navbar-reducer';
import card from './reducers/card-reducer';
import auth from './reducers/auth-reducer';

export default combineReducers({ list, navbar, card, auth });