import { composeWithDevTools } from '@redux-devtools/extension';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
