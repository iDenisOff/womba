import OAuthAPIinst, { AuthAPI } from "@api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SigninRequest, TOAuthCredentials } from "@types";

import { UserState } from "./types";

function getInitialState(): UserState {
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
        }
    };
}

export const loginUser = createAsyncThunk("user/login", async (data: SigninRequest) => {
    const api = new AuthAPI();

    await api.singin(data);

    return await api.getUser();
});

export const loadUser = createAsyncThunk("user/load", () => {
    const api = new AuthAPI();

    return api.getUser();
});

export const loadOAuthId = createAsyncThunk("user/oauthid", () => {
    return OAuthAPIinst.loadOAuthId();
});

export const loginUserOAuth = createAsyncThunk(
    "user/loginOauth",
    async (data: TOAuthCredentials) => {
        const api = new AuthAPI();

        await OAuthAPIinst.signIn(data);

        return await api.getUser();
    }
);

export const userSlice = createSlice({
    initialState: getInitialState(),
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
