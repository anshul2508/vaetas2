import {Action} from '../actions/action';
import {SET_REDIRECT_URL} from '../actions/layout';
import {LOGOUT_SUCCESS} from '../actions/user';

export interface LayoutState {
  redirectUrl: string;
}

export const initialState: LayoutState = {
  redirectUrl: null,
};

export function reducer (state = initialState, action: Action ): LayoutState {
  switch (action.type) {
    case SET_REDIRECT_URL : {
      const redirectUrl = action.payload;
      return {...state, ...{redirectUrl: redirectUrl}};
    }
    case LOGOUT_SUCCESS : {
      return initialState;
    }
    default : {
      return state;
    }

  }
}

export const getRedirectUrl = (state: LayoutState) => state.redirectUrl;
