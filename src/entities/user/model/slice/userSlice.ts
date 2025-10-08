import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from 'entities/user/model/types/userSchema';

const initialState: IUserSchema = {

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
