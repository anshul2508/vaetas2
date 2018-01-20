import {Email} from '../models/email';
import {Action} from '../actions/action';
import {EMAIL_LIST_REQUEST, EMAIL_LIST_SUCCESS, EMAIL_DELETE_REQUEST, EMAIL_DELETE_SUCCESS,
        EMAIL_STORE_REQUEST, EMAIL_STORE_SUCCESS, EMAIL_UPDATE_SUCCESS, EMAIL_SENT_SUCCESS,
        EMAIL_CLONE_SUCCESS, EMAIL_CLONE_REQUEST} from '../actions/email';
import ReducerUtils from './reducer-utils';
import {LOGOUT_SUCCESS} from '../actions/user';
import {createSelector} from 'reselect';


export interface EmailState {
  ids: number[];
  entities: {[id: number]: Email};
  loaded: boolean;
  loading: boolean;
}

export const initialState: EmailState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer (state = initialState, action: Action): EmailState {
  switch (action.type) {
    case EMAIL_LIST_REQUEST : {
      return {...state, loading: true};
    }
    case EMAIL_LIST_SUCCESS : {
      const emails = action.payload;
      const obj = ReducerUtils.normalize(emails);
      const ids = emails.map((email) => email.id);
      const newIds = ReducerUtils.filterDuplicateIds([...state.ids, ...ids]);
      const entities = {...state.entities, ...obj};
      return {...state, ...{ids: newIds, entities: entities, loading: false, loaded: true}};
    }
    case EMAIL_DELETE_REQUEST :
    case EMAIL_DELETE_SUCCESS: {
      const id = action.payload;
      const newIds = state.ids.filter((elem) => elem !== id);
      const newEntities = ReducerUtils.removeKey(state.entities, id);
      return{...state, ...{ids: newIds, entities: newEntities}};
    }
    case EMAIL_STORE_REQUEST : {
      return{...state, ...{loading: true}};
    }
    case EMAIL_STORE_SUCCESS : {
      const email = action.payload;
      const id = email.id;
      const obj = { [id] : email};
      let newIds = [...state.ids, ...id];
      newIds = ReducerUtils.filterDuplicateIds(newIds);
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{ids: newIds, entities: newEntities, loading: false}};
    }
    case EMAIL_CLONE_REQUEST : {
      return {...state, ...{loading: true}};
    }
    case  EMAIL_CLONE_SUCCESS : {
      const email = action.payload;
      const id = email.id;
      const obj = {[id]: email};
      let newIds = [...state.ids, ...id];
        newIds =  ReducerUtils.filterDuplicateIds(newIds);
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{ids: newIds, entities: newEntities, loading: false}};
    }
    case EMAIL_SENT_SUCCESS : {
      const id = action.payload;
      const email = {...state.entities[id], ...{sent: true}};
      const obj = {[id]: email};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case  EMAIL_UPDATE_SUCCESS : {
      const email = action.payload;
      const id = email.id;
      const obj = {[id]: email};
      const entities = {...state.entities, ...obj};
      return {...state, ...{entities: entities}};
    }
    case LOGOUT_SUCCESS : {
      return initialState;
    }
    default: {
      return state;
    }

  }
}

export const getEntities = (state: EmailState) => state.entities;
export const getIds = (state: EmailState) => state.ids;
export const getEmails = createSelector(getIds, getEntities, (ids, entities) => ids.map((id) => entities[id]));
export const getLoading = (state: EmailState) => state.loading;
export const getLoaded = (state: EmailState) => state.loaded;
