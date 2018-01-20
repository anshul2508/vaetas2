import {Account} from '../models/account';
import {Action} from '../actions/action';
import {
  ACCOUNT_ADD, ACCOUNT_DELETE_REQUEST, ACCOUNT_DELETE_SUCCESS, ACCOUNT_LIST_REQUEST,
  ACCOUNT_LIST_SUCCESS
} from '../actions/account';
import ReducerUtils from './reducer-utils';
import {LIST_LIST_REQUEST, LIST_LIST_SUCCESS} from '../actions/lists';
import {LOGOUT_SUCCESS} from '../actions/user';
import {createSelector} from 'reselect';


export interface AccountState {
  ids: number[];
  entities: {[id: number]: Account};
  loading: boolean;
  loaded: boolean;
  lists: {[id: number]: any[]};
  listsLoading: {[id: number]: boolean};
}

export const initialState: AccountState = {
  ids: [],
  entities: null,
  loading: false,
  loaded: false,
  lists: null,
  listsLoading: null
};

export function reducer(state = initialState, action: Action): AccountState {
  switch (action.type) {
    case ACCOUNT_LIST_REQUEST : {
     return {...state, loading: true};
    }
    case ACCOUNT_LIST_SUCCESS : {
      const accounts = action.payload;
      const obj = ReducerUtils.normalize(accounts);
      const ids = accounts.map(account => account.id);
      const newIds = ReducerUtils.filterDuplicateIds({...state.ids, ...ids});
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{ids: newIds, entities: newEntities, loaded: true, loading: false}};
    }
    case ACCOUNT_ADD : {
      const account = action.payload;
      const id = account.id;
      const obj = {[id]: account};
      const newIds = ReducerUtils.filterDuplicateIds({...state.ids, ...id});
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{ids: newIds, entities: newEntities}};
    }
    case ACCOUNT_DELETE_REQUEST:
    case ACCOUNT_DELETE_SUCCESS: {
      const id = action.payload;
      const newIds = state.ids.filter((elem) => elem !== id);
      const newEntites = ReducerUtils.removeKey(state.entities, id);
      return {...state, ...{ids: newIds, entities: newEntites}};
    }
    case LIST_LIST_REQUEST: {
      const id = action.payload;
      const listLoading = {...state.listsLoading, ...{[id]: true}};
      return {...state, ...{listsLoading: listLoading}};
    }
    case LIST_LIST_SUCCESS : {
      const lists = action.payload.lists;
      const id = action.payload.id;
      const newLists = {...state.lists, ...{[id]: lists}};
      const newListLoading = {...state.listsLoading, ...{[id]: false}};
      return {...state, ...{lists: newLists, listsLoading: newListLoading}};
    }
    case LOGOUT_SUCCESS : {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getIds = (state: AccountState) => state.ids;
export const getEntities = (state: AccountState) => state.entities;
export const getAccountLists = (state: AccountState) => state.lists;
export const isAccountLoaded = (state: AccountState) => state.loaded;
export const isAccountLoading = (state: AccountState) => state.loading;
export const isAccountListLoading = (state: AccountState) => state.listsLoading;
export const getAccounts = createSelector(getIds, getEntities, (ids, entities) => ids.map( id => entities[id]));


