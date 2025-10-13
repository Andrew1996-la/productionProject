import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserSchema } from 'entities/user';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage/user';
import { IUser } from '../types/userSchema';

const initialState: IUserSchema = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
        },
        initAuthUser: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY);

            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
