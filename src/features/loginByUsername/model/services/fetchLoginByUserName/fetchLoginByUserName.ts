import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from 'entities/user/model/types/userSchema';
import axios from 'axios';

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
            const responce = await axios.post('http://localhost:8000/login', authData);
            return responce.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);
