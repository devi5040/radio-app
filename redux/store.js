import {createStore} from 'redux';
import {Provider} from 'react-redux';
import radioReducer from './reducers';

// Create Redux store
const store = createStore(radioReducer);

export default store;
