import * as types from './types';
import { getUserPosts } from '../api/posts';
import { getUsersByAPI } from '../api/users';
import { takeEvery, put, call } from 'redux-saga/effects';

function* fetchUserPosts(action) {
  try {
    const userPosts = yield call(getUserPosts);
    yield put({
      type: types.USER_POSTS_FETCH_SUCCEEDED,
      payload: {
        data: userPosts
      }
    });
  } catch (error) {
    yield put({
      type: types.USER_POSTS_FETCH_FAILED,
      payload: {
        message: error.message
      }
    });
  }
}

function* fetchUsers() {

    debugger
  try {
      debugger
    const users = yield call(getUsersByAPI);
    yield put({
      type: types.FETCH_USERS_SUCCEEDED,
      payload: {
        data: users
      }
    });
  } catch (error) {
      debugger
    console.log(error);
  }
}

export function* rootSaga() {
  yield takeEvery(types.USER_POSTS_FETCH_REQUESTED, fetchUserPosts)
  yield takeEvery(types.FETCH_USERS, fetchUsers);
}
