import {Action} from './action';
import {Template} from '../models/template';

export const TEMPLATE_LIST_REQUEST = '[Template] List Request';
export const TEMPLATE_LIST_SUCCESS = '[Template] List Success';
export const TEMPLATE_STORE_REQUEST = '[Template] Store Request';
export const TEMPLATE_STORE_SUCCESS = '[Template] Store Success';
export const TEMPLATE_UPDATE_REQUEST = '[Template] Update Request';
export const TEMPLATE_UPDATE_SUCCESS = '[Template] Update Success';
export const TEMPLATE_DELETE_ACTION = '[Template] Delete Action';

export class TemplateListRequestAction implements Action {
  readonly type = TEMPLATE_LIST_REQUEST;
}

export class TemplateListSuccesstAction implements Action {
  readonly type = TEMPLATE_LIST_SUCCESS;
  constructor(public payload: Template[]) {}
}

export class TemplateStoreRequestAction implements Action {
  readonly type = TEMPLATE_STORE_REQUEST;
}

export class TemplateStoreSuccessAction implements Action {
  readonly type = TEMPLATE_STORE_SUCCESS;
  constructor( public payload: Template) {}
}

export class TemplateUpdateRequestAction implements Action {
  readonly type = TEMPLATE_UPDATE_REQUEST;
}

export class TemplateUpdateSuccessAction implements Action {
  readonly type = TEMPLATE_UPDATE_SUCCESS;
  constructor( public payload: Template) {}
}

export class TemplateDeleteAction implements Action {
  readonly type = TEMPLATE_DELETE_ACTION;
  constructor( public payload: number) {}
}

