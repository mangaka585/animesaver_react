import * as ActionTypes from './ActionTypes';

export const Animelist = (state = { isLoading: true, errMess: null, animelist:[] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ANIMELIST:
            return {...state, isLoading: false, errMess: null, animelist: action.payload};

        case ActionTypes.ANIMELIST_LOADING:
            return {...state, isLoading: true, errMess: null, animelist: []}

        case ActionTypes.ANIMELIST_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};