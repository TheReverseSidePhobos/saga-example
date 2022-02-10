import * as types from './types';

const initialState = {
    posts: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_POSTS_FETCH_SUCCEEDED:
            const posts = action.payload.data
            return{
                ...state,
                posts
            }            
    
        default:
            return state
    }
}