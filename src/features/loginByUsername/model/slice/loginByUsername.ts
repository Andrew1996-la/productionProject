import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginByUsernameSchema } from 'features/loginByUsername';
import { fetchLoginByUserName } from '../services/fetchLoginByUserName/fetchLoginByUserName';

const initialState: ILoginByUsernameSchema = {
    username: '',
    password: '',
    isLoading: false,
};

const loginByUsername = createSlice({
    name: 'loginByUsername',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLoginByUserName.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(fetchLoginByUserName.fulfilled, (state) => {
            state.isLoading = false;
            state.username = '';
            state.password = '';
        });
        builder.addCase(fetchLoginByUserName.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: loginByUserNameActions } = loginByUsername;
export const { reducer: loginByUserNameReducer } = loginByUsername;
