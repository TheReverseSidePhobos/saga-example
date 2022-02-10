import * as types from './types';

const initialState = {
  posts: null,
  users: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_POSTS_FETCH_SUCCEEDED:
      const posts = action.payload.data;
      return {
        ...state,
        posts
      };
    case types.FETCH_USERS_SUCCEEDED:
      const users = action.payload.data;
      return {
        ...state,
        users
      };

    default:
      return state;
  }
};
