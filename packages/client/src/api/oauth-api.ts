import { TOAuthId, TOAuthCredentials, TOAuthResult } from "@types";

import BaseAPI from "./base-api";

import { DEFAULT_REDIRECT_URI } from "../consts/auth";

export class OAuthAPI extends BaseAPI {
    constructor() {
        super("/oauth");
    }

    loadOAuthId(redirectUri: string = DEFAULT_REDIRECT_URI): Promise<TOAuthId> {
        return this.http.get(`/yandex/service-id?redirect_uri?${redirectUri}`);
    }

    signIn(credentials: TOAuthCredentials): Promise<TOAuthResult> | void {
        return this.http.post(`/yandex`, { data: credentials });
    }
}

export default new OAuthAPI();
