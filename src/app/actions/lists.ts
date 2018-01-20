import {Action} from './action';

export const LIST_LIST_REQUEST = '[List] List Request';
export const LIST_LIST_SUCCESS = '[List] List Success';

export class ListListRequestAction implements Action {
  readonly type = LIST_LIST_REQUEST;
  constructor ( public payload: number) {}
}

export class ListListSuccessAction implements Action {
  readonly type = LIST_LIST_SUCCESS;
  constructor ( public payload: {lists: any[], id: number }) {}
}
