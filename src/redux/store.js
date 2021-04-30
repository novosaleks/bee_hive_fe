import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = (state = {}, action) => {
    return state;
};

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

