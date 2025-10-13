import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'entities/user/model/types/userSchema';
import axios from 'axios';
import { userActions } from 'entities/user';
import { LOCAL_STORAGE_USER_KEY } from 'shared/const/localStorage/user';

interface IFetchLoginByUsernameProps {
    username: string;
    password: string;
}

export const fetchLoginByUserName = createAsyncThunk<
    IUser,
    IFetchLoginByUsernameProps,
    {rejectValue: string}
>(
    'login/fetchLoginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);

            if (!response.data) {
                return new Error('Login failed');
            }

            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setUserData(response.data));

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
