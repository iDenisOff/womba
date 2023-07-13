import { RootState } from "../store";

export function getUser(state: RootState) {
    return state.user.user;
}
export function userInitialization(state: RootState) {
    return state.user.fetching;
}

export function getUserAuthorized(state: RootState) {
    return state.user.authorized;
}

export function getOAuthId(state: RootState) {
    return state.user.OAuthId.service_id;
}
