import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/testAsyncThunk/testAsyncThunk';
import { userActions } from 'entities/user';
import { fetchLoginByUserName } from './fetchLoginByUserName';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('fetchLoginByUserName', () => {
    test('success', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: 'test', id: '1' } }));

        const thunk = new TestAsyncThunk(fetchLoginByUserName);
        const result = await thunk.callThunk({ username: 'admin', password: '2134' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserData({ username: 'test', id: '1' }));
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ username: 'test', id: '1' });
    });

    test('error', async () => {
        mockedAxios.post.mockReturnValue(Promise.reject());
        const thunk = new TestAsyncThunk(fetchLoginByUserName);
        const result = await thunk.callThunk({ username: 'admin', password: '2134' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
