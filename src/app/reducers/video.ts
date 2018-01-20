import {Video} from '../models/video';
import {Action} from '../actions/action';
import {VIDEO_LIST_REQUEST, VIDEO_LIST_SUCCESS, VIDEO_IMPORT_SUCCESS, VIDEO_DELETE_REQUEST, VIDEO_DELETE_SUCCESS} from '../actions/video';
import ReducerUtils from './reducer-utils';
import {LOGOUT_SUCCESS} from '../actions/user';
import {createSelector} from 'reselect';


export interface VideoState {
  ids: number[];
  entities: {[id: number]: Video };
  loaded: boolean;
  loading: boolean;
}

export const initialState: VideoState = {
  ids: [],
  entities: null,
  loaded: false,
  loading: false
};

export function reducer (state: VideoState, action: Action): VideoState {
  switch (action.type) {
    case VIDEO_IMPORT_SUCCESS : {
      const video = action.payload;
      const obj = {[video.id]: video};
      const newIds = [...state.ids, video.id];
      const newEntities = {...state.entities, ...obj};
      return {...state, ...{entities: newEntities, ids: newIds}};
    }
    case VIDEO_LIST_REQUEST : {
      return {...state, loading: true};
    }
    case VIDEO_LIST_SUCCESS : {
      const videos = action.payload;
      const obj = ReducerUtils.normalize(videos);
      const ids = videos.map((video) => video.id );
      const newIds = ReducerUtils.filterDuplicateIds([...state.ids, ...ids]);
      const entities = {...state.entities, ...obj};
      return {...state, ...{ids: newIds, entities: entities, loaded: false, loading: true}};
    }
    case VIDEO_DELETE_REQUEST :
    case VIDEO_DELETE_SUCCESS : {
      const id = action.payload;
      const newIds = state.ids.filter((elem) => elem !== id);
      const newEntities = ReducerUtils.removeKey(state.entities, id);
      return {...state, ...{ids: newIds, entities: newEntities}};
    }
    case LOGOUT_SUCCESS : {
      return initialState;
    }
    default : {
      return state;
    }
  }
}

export const getIds = (state: VideoState) => state.ids;
export const getEntities = (state: VideoState) => state.entities;
export const getLoading = (state: VideoState) => state.loading;
export const getLoaded = (state: VideoState) => state.loaded;
export const getVideos = createSelector( getIds, getEntities, (ids, entities) => {ids.map((id) => entities[id]); });
