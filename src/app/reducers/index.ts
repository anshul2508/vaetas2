 import * as fromUser from './user';
 import * as fromVideo from './video';
 import * as fromCta from './cta';
 import * as fromAccount from './account';
 import * as fromTemplate from './template';
 import * as fromLayout from './layout';
 import * as fromEmail from './email';
 import {ActionReducerMap, createSelector} from '@ngrx/store';
 import {TemplateState} from './template';
 import {isAccountListLoading} from './account';


export interface State {
  user: fromUser.UserState;
  video: fromVideo.VideoState;
  cta: fromCta.CtaState;
  account: fromAccount.AccountState;
  template: fromTemplate.TemplateState;
  layout: fromLayout.LayoutState;
  email: fromEmail.EmailState;
}
export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer,
  video: fromVideo.reducer,
  cta: fromCta.reducer,
 account: fromAccount.reducer,
 template: fromTemplate.reducer,
 layout: fromLayout.reducer,
 email: fromEmail.reducer,
};

export const getUserState = (state: State) => state.user;

export const getUser = createSelector(getUserState, fromUser.getUser);
export const loggedIn = createSelector(getUserState, fromUser.isLoggedIn);
export const loggingin = createSelector(getUserState, fromUser.isLoggingIn);


export const getVideoState = (state: State) => state.video;

export const getVideoIds = createSelector(getVideoState, fromVideo.getIds);
export const getVideoEntities = createSelector(getVideoState, fromVideo.getEntities);
export const getVideos = createSelector(getVideoState, fromVideo.getVideos);
export const getVideosLoaded = createSelector(getVideoState, fromVideo.getLoaded);
export const getVideosLoading = createSelector(getVideoState, fromVideo.getLoading);
export const getvideo = (state: State, id: number) => {
  const entities = getVideoEntities(state);
  return entities[id];
};


 export const getCtaState = (state: State) => state.cta;

 export const getCtaIds = createSelector(getCtaState, fromCta.getIds);
 export const getCtaEntities = createSelector(getCtaState, fromCta.getEntities);
 export const getCtas = createSelector(getCtaState, fromCta.getCtas);
 export const getCtasLoaded = createSelector(getCtaState, fromCta.getLoaded);
 export const getCtasLoading = createSelector(getCtaState, fromCta.getLoading);
 export const getCta = (state: State, id: number) => {
   const entities = getCtaEntities(state);
   return entities[id];
 };

 export const getEmailState = (state: State) => state.email;

 export const getEmailIds = createSelector(getEmailState, fromEmail.getIds);
 export const getEmailEntities = createSelector(getEmailState, fromEmail.getEntities);
 export const getEmails = createSelector(getEmailState, fromEmail.getEmails);
 export const getEmailsLoaded = createSelector(getEmailState, fromEmail.getLoaded);
 export const getEmailsLoading = createSelector(getEmailState, fromEmail.getLoading);
 export const getEmail = (state: State, id: number) => {
   const entities = getEmailEntities(state);
   return entities[id];
 };

 export const getTemplateState = (state: State) => state.template;

 // export const getTemplateIds = createSelector(getTemplateState, fromTemplate.getIds);
 export const getTemplateEntities = createSelector(getTemplateState, fromTemplate.getEntities);
 export const getTemplates = createSelector(getTemplateState, fromTemplate.getTemplates);
 export const getTemplatesLoaded = createSelector(getTemplateState, fromTemplate.getLoaded);
 export const getTemplatesLoading = createSelector(getTemplateState, fromTemplate.getLoading);
 export const getTemplate = (state: State, id: number) => {
   const entities = getTemplateEntities(state);
   return entities[id];
 };

 export const getAccountState = (state: State) => state.account;

 // export const getAccountIds = createSelector(getAccountState, fromAccount.getIds);
 export const getAccountEntities = createSelector(getAccountState, fromAccount.getEntities);
 export const getAccountsLoaded = createSelector(getAccountState, fromAccount.isAccountLoaded);
 export const getAccountsLoading = createSelector(getAccountState, fromAccount.isAccountLoading);
 export const getAccounts = createSelector(getAccountState, fromAccount.getAccounts);
 export const getAccountsLists = createSelector(getAccountState, fromAccount.getAccountLists);
 // export const getAccountsListLoading = createSelector(getAccountState, fromAccount.isAccountListLoading);
 export const getLists = (state: State, id: number) => {
   const lists = getAccountsLists(state);
   return lists[id];
 };
 export const getListsLoading = (state: State, id: number) => {
   const lists = isAccountListLoading(state.account);
   return lists[id];
 };


 export const getLayoutState = (state: State) => state.layout;

 export const getRedirectUrl = createSelector(getLayoutState, fromLayout.getRedirectUrl);

