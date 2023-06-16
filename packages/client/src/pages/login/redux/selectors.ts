import { State } from '../../../types/state';

export function getLogin(state: State) {
    return state.user.login;
}
