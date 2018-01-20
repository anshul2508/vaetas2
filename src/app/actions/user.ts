import {User} from '../models/user';
import {Action} from './action';

export const LOGIN_REQUEST = '[USER] Login Request';
export const LOGIN_SUCCESS = '[USER] Login Success';
export const LOGOUT_SUCCESS = '[USER] Logout Success';
export const SIGNUP_SUCCESS = '[USER] SignIn Success';
export const USER_PROFILE_REQUEST = '[USER] Profile Request';
export const USER_PROFILE_SUCCESS = '[USER] Profile Success';
export const USER_UPDATE_SUCCESS = '[USER] Account Reset Success';
export const USER_PLAN_SUBSCRIBE = '[USER] Plan subscribe';
export const USER_PLAN_UNSUBSCRIBE = '[USER] Plan unsubscribe';

export class LoginRequestAction implements Action {
  readonly type = LOGIN_REQUEST;
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor ( public payload: User) {
  }
}

export class LogoutSuccessAction implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export class SignUpSuccessAction implements Action {
  readonly type = SIGNUP_SUCCESS;
  constructor ( public payload: User) {
  }
}

export class UserProfileRequestAction implements Action {
  readonly type = USER_PROFILE_REQUEST;
}

export class UserProfileSuccessAction implements Action {
  readonly type = USER_PROFILE_SUCCESS;
  constructor ( public payload: User) {
  }
}

export class UserUpdateAction implements Action {
  readonly type = USER_UPDATE_SUCCESS;
  constructor ( public payload: User) {
  }
}

export class UserPlanSubscribeAction implements Action {
  readonly type = USER_PLAN_SUBSCRIBE;
  constructor ( public payload: string) {
  }
}

export class UserPlanUnsubscribeAction implements Action {
  readonly type = USER_PLAN_UNSUBSCRIBE;
  constructor ( public payload: string) {
  }
}

