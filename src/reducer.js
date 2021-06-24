import { combineReducers } from 'redux';
import auth from './reducers/auth';
import home from './reducers/home';
import navbar from './reducers/navbar';

export default combineReducers({ auth, home, navbar });