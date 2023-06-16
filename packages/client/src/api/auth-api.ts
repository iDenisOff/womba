import { SigninRequest, User, SignupRequest } from '@types';

import BaseAPI from './base-api';

export class AuthAPI extends BaseAPI {
    constructor() {
        super('/auth');
    }

    signup(data: SignupRequest) {
        return this.http.post('/signup', {
            data
        });
    }

    singin(data: SigninRequest) {
        return this.http.post('/signin', {
            data
        });
    }

    logout() {
        return this.http.post('/logout');
    }

    getUser() {
        return this.http.get<User>('/user');
    }
}
