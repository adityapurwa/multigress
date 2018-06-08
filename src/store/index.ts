import { combineReducers, createStore } from 'redux';

import TABLE from './module/table';

const reduxWindow = window as any;

const reducers = combineReducers({
  table: TABLE.REDUCERS
});

const store = createStore(
  reducers,
  reduxWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
  reduxWindow.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
