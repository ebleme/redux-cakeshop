import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';



const composedEnhancer = compose(applyMiddleware(logger, thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const store = createStore(rootReducer, 
    
    composedEnhancer
   );

export default store;
