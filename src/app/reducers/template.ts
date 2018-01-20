import {Action} from '../actions/action';
import {Template} from '../models/template';
import {
  TEMPLATE_DELETE_ACTION,
  TEMPLATE_LIST_REQUEST, TEMPLATE_LIST_SUCCESS, TEMPLATE_STORE_REQUEST,
  TEMPLATE_STORE_SUCCESS, TEMPLATE_UPDATE_REQUEST, TEMPLATE_UPDATE_SUCCESS
} from '../actions/template';
import ReducerUtils from './reducer-utils';
import {LOGOUT_SUCCESS} from '../actions/user';
import {createSelector} from 'reselect';

export interface TemplateState {
  ids: number[];
  entities: {[id: number]: Template};
  loaded: boolean;
  loading: boolean;
}

export const initialState: TemplateState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false
};

export function reducer (state: TemplateState, action: Action) {
  switch (action.type) {
    case TEMPLATE_LIST_REQUEST : {
      return {...state, loading: true};
    }
    case TEMPLATE_LIST_SUCCESS : {
      const templates = action.payload;
      const obj = ReducerUtils.normalize(templates);
      const ids = templates.map(elem => elem.id);
      const newIds = ReducerUtils.filterDuplicateIds([...state.ids, ...ids]);
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{ids: newIds, entities: newEntities, loading: false, loaded: true}};
    }
    case TEMPLATE_STORE_SUCCESS : {
      const template = action.payload;
      const obj = {[template.id]: template};
      const ids = {...state.ids, ...template.id};
      const newIds = ReducerUtils.filterDuplicateIds([...state.ids, ...ids]);
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{ids: newIds, entities: newEntities, loading: false, loaded: true}};
    }
    case TEMPLATE_UPDATE_SUCCESS: {
      const template =  action.payload;
      const obj = {[template.id]: template};
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities}};
    }
    case TEMPLATE_DELETE_ACTION : {
      const id = action.payload;
      const newIds = state.ids.filter(elem => elem !== id);
      const newEntities = ReducerUtils.removeKey(state.entities, id);
      return {...state, ...{ids: newIds, entities: newEntities}};
    }
    case LOGOUT_SUCCESS : {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getEntities = (state: TemplateState) => state.entities;
export const getIds = (state: TemplateState) => state.ids;
export const getTemplates = createSelector(getIds, getEntities, (ids, entities) => ids.map((id) => entities[id]));
export const getLoading = (state: TemplateState) => state.loading;
export const getLoaded = (state: TemplateState) => state.loaded;
