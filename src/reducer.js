import { combineReducers } from 'redux';
import auth from './reducers/auth';
import list from './reducers/list';
import navbar from './reducers/navbar';
import add from './reducers/add';

export default combineReducers({ auth, list, navbar, add });