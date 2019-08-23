import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'


export default (initialState={}) => {
    let middlewares = [thunk]
    let store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    )

    return store
}
