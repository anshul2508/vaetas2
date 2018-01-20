import {Cta} from '../models/cta';
import {Action} from '../actions/action';
import {
  CTA_ADD_REQUEST, CTA_ADD_SUCCESS, CTA_DELETE_REQUEST, CTA_DELETE_SUCCESS, CTA_LIST_REQUEST,
  CTA_LIST_SUCCESS, CTA_UPDATE_REQUEST, CTA_UPDATE_SUCCESS
} from '../actions/cta';
import ReducerUtils from './reducer-utils';
import {LOGOUT_SUCCESS} from '../actions/user';
import {createSelector} from 'reselect';

export interface CtaState {
  ids: number[];
  entities: {[id: number]: Cta};
  loaded: boolean;
  loading: boolean;
}

export const initialState: CtaState = {
  ids: [],
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer (state = initialState, action: Action ): CtaState {
  switch (action.type) {
    case CTA_LIST_REQUEST : {
      return {...state, loading: true};
    }
    case CTA_LIST_SUCCESS : {
      const ctas = action.payload;
      const obj = ReducerUtils.normalize(ctas);
      const ids = ctas.map((cta) => cta.id);
      const newIds = ReducerUtils.filterDuplicateIds([...state.ids, ...ids]);
      const entities = {...state.entities, ...obj};
      return {...state, ...{ids: newIds, entities: entities, loading: false, loaded: true}};
    }
    case CTA_ADD_REQUEST : {
      return {...state, loading: true};
    }
    case CTA_ADD_SUCCESS : {
      const cta = action.payload;
      const id = cta.id;
      const obj = {[id]: cta};
      const ids = {...state.ids, id};
      const entities = {...state.entities, ...obj};
      return {...state, ...{ids: ids, entities: entities, loading: false}};
    }
    case CTA_DELETE_REQUEST :
    case CTA_DELETE_SUCCESS : {
      const id = action.payload;
      const newIds = state.ids.filter((elem) => elem !== id);
      const newEntities = ReducerUtils.removeKey(state.entities, id);
      return {...state, ...{ids: newIds, entities: newEntities}};
    }
    case CTA_UPDATE_REQUEST : {
      return {...state, loading: true};
    }
    case CTA_UPDATE_SUCCESS : {
      const cta = action.payload;
      const id = cta.id;
      const obj = {[id]: cta};
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

  export const getEntities = (state: CtaState) => state.entities;
  export const getIds = (state: CtaState) => state.ids;
  export const getCtas = createSelector(getIds, getEntities, (ids, entities) => ids.map((id) => entities[id]));
  export const getLoading = (state: CtaState) => state.loading;
  export const getLoaded = (state: CtaState) => state.loaded;
