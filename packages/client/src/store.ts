import { reducer as userReducer } from '@pages/login';
import { configureStore } from '@reduxjs/toolkit';

const reducer = {
    user: userReducer
};

export const store = configureStore({ reducer });
