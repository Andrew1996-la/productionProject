import { StoreScheme } from 'app/providers/reduxProvider';

export const getCounter = (state: StoreScheme) => state.counter;
