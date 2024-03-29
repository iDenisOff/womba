import { authApi, oAuthApi } from "@api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SigninRequest, TOAuthCredentials, SignupRequest } from "@types";

import { UserState } from "./types";

function getInitialState(state: Partial<UserState>): UserState {
    return {
        fetching: true,
        authorized: false,
        user: {
            id: 0,
            first_name: "",
            second_name: "",
            display_name: "",
            login: "",
            avatar: "",
            email: "",
            phone: ""
        },
        OAuthId: {
            service_id: null
        },
        ...state
    };
}

export const loginUser = createAsyncThunk("user/login", async (data: SigninRequest) => {
    await authApi.singin(data);
    const response = await authApi.getUser();

    return response;
});

export const registerUser = createAsyncThunk("user/registration", async (data: SignupRequest) => {
    // const api = new AuthAPI();

    try {
        await authApi.signup(data);

        return await authApi.getUser();
    } catch (e: any) {
        alert(e.reason);
        throw e;
    }
});
export const loadUser = createAsyncThunk("user/load", () => {
    return authApi.getUser();
});

export const loadOAuthId = createAsyncThunk("user/oauthid", () => {
    return oAuthApi.loadOAuthId();
});

export const loginUserOAuth = createAsyncThunk(
    "user/loginOauth",
    async (data: TOAuthCredentials) => {
        await oAuthApi.signIn(data);
        const response = await authApi.getUser();

        return response;
    }
);

export function createUserSlice(data: Partial<UserState> | undefined = {}) {
    return createSlice({
        initialState: getInitialState(data),
        name: "user",
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(loginUser.fulfilled, (state, action) => {
                    state.fetching = false;
                    state.authorized = true;
                    state.user = action.payload;
                })
                .addCase(loadUser.fulfilled, (state, action) => {
                    state.fetching = false;
                    state.authorized = true;
                    state.user = action.payload;
                })
                .addCase(registerUser.fulfilled, (state, action) => {
                    state.fetching = false;
                    state.authorized = true;
                    state.user = action.payload;
                })
                .addCase(loadOAuthId.fulfilled, (state, action) => {
                    state.fetching = false;
                    state.OAuthId = action.payload;
                })
                .addCase(loginUserOAuth.fulfilled, (state, action) => {
                    state.fetching = false;
                    state.authorized = true;
                    state.user = action.payload;
                })
                .addCase(loginUser.rejected, state => {
                    state.fetching = false;
                })
                .addCase(registerUser.rejected, state => {
                    state.fetching = false;
                })
                .addCase(loadUser.rejected, state => {
                    state.fetching = false;
                })
                .addCase(loadOAuthId.rejected, state => {
                    state.fetching = false;
                })
                .addCase(loginUserOAuth.rejected, state => {
                    state.fetching = false;
                })
                .addCase(loginUser.pending, state => {
                    state.fetching = true;
                })
                .addCase(registerUser.pending, state => {
                    state.fetching = true;
                })
                .addCase(loadUser.pending, state => {
                    state.fetching = true;
                })
                .addCase(loadOAuthId.pending, state => {
                    state.fetching = true;
                })
                .addCase(loginUserOAuth.pending, state => {
                    state.fetching = true;
                });
        }
    });
}
