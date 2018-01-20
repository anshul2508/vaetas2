

import {User} from '../models/user';
import {Action} from '../actions/action';
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_SUCCESS, USER_PLAN_SUBSCRIBE, USER_PLAN_UNSUBSCRIBE,
  USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_UPDATE_SUCCESS
} from '../actions/user';

export interface UserState {
  user: User;
  loggedIn: boolean;
  loggingIn: boolean;
}

export const initialState: UserState = {
  user: null,
  loggedIn: false,
  loggingIn: false
};

export function reducer (state = initialState, action: Action): UserState {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
    case LOGIN_REQUEST: {
      return {...state, ...{loggingIn: true}};
    }
    case USER_PROFILE_SUCCESS :
    case LOGIN_SUCCESS: {
      return {...state, ...{user: action.payload, loggedIn: true, loggingIn: false}};
    }
    case SIGNUP_SUCCESS: {
      return {...state, ...{user: action.payload, loggedIn: true, loggingIn: false}};
    }
    case USER_UPDATE_SUCCESS : {
      return {...state, ...{user: action.payload}};
    }
    case USER_PLAN_SUBSCRIBE : {
      return {...state, ...{user: {...state.user, plan: action.payload }}};
    }
    case USER_PLAN_UNSUBSCRIBE : {
      return {...state, ...{user : {...state.user, plan: action.payload}}};
    }
    case LOGOUT_SUCCESS : {
      return {...state, ...{user: null, loggedIn: false, loggingIn: false}};
    }
    default : {
      return state;
    }
  }
}

export const getUser = (state: UserState) => state.user ;
export const isLoggedIn = (state: UserState) => state.loggedIn ;
export const isLoggingIn = (state: UserState) => state.loggingIn ;
