import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Comments } from './comments';
import { Animelist } from './animelist';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            //comments: Comments,
            animelist: Animelist,
            // ...createForms({
            //     feedback: InitialFeedback
            // })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}