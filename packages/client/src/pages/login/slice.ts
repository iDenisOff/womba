import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from './types/state';

function getInitialState(): UserState {
    return {
        email: null,
        login: null,
        name: null,
        password: null,
        phone: null,
        surname: null
    };
}

export const userSlice = createSlice({
    initialState: getInitialState(),
    name: 'user',
    reducers: {
        setLogin(state, action: PayloadAction<string | null>) {
            state.login = action.payload;
        },
        setPassword(state, action: PayloadAction<string | null>) {
            state.password = action.payload;
        }
    }
});
