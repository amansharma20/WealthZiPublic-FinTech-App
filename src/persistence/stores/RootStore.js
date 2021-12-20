/* eslint-disable prettier/prettier */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AuthReducer } from '../reducers/AuthReducer';
import { SessionReducer } from '../reducers/SessionReducer';
import { MutualFundsReducer } from '../reducers/MutualFundsReducer';
import { ExploreReducer } from '../reducers/ExploreReducer';
import { ProfileReducer } from '../reducers/ProfileReducer';

const allReducers = combineReducers({
  AuthReducer,
  SessionReducer,
  MutualFundsReducer,
  ExploreReducer,
  ProfileReducer,
});

const applicationStore = createStore(
  allReducers,
  applyMiddleware(thunkMiddleware),
);
export default applicationStore;
