import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StoreScheme } from 'app/providers/reduxProvider';

type TActionCreatorType<Returned, Args, RejectedValue> = (arg: Args) =>
    AsyncThunkAction<Returned, Args, {rejectValue: RejectedValue}>

jest.mock('axios');

export class TestAsyncThunk<Returned, Args, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StoreScheme;

    actionCreator: TActionCreatorType<Returned, Args, RejectedValue>;

    constructor(actionCreator: TActionCreatorType<Returned, Args, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Args) {
        const action = this.actionCreator(arg);
        return action(this.dispatch, this.getState, undefined);
    }
}
