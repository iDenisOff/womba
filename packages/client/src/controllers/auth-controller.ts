import { AuthAPI } from '@api';
import { SigninRequest, SignupRequest } from '@types';

class AuthController {
    private api: AuthAPI;
    constructor() {
        this.api = new AuthAPI();
    }

    async signup(data: SignupRequest) {
        try {
            await this.api.signup(data);
            console.log('signed up');
        } catch (e) {
            console.log('signup error', e);
        }
    }

    async signin(data: SigninRequest) {
        try {
            await this.api.singin(data);
            alert('Вы залогинены');
        } catch (e: any) {
            alert(`Ошибка логина ${e.reason}`);
            console.log('signed in error', e);
        }
    }

    async logout() {
        try {
            await this.api.logout();
        } catch (e) {
            console.log('logout error', e);
        }
    }
}

export const authController = new AuthController();
