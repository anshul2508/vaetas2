import {Action} from './action';

export const SET_REDIRECT_URL = '[Layout] Set Redirect URL';

export class SetRedirectURLAction implements Action {
  readonly type = SET_REDIRECT_URL;
  constructor ( public payload: string) {}
}
