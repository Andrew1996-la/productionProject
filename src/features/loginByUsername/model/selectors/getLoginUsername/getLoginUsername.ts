import { StoreScheme } from 'app/providers/reduxProvider';

export const getLoginUsername = (store: StoreScheme) => store.login?.username || undefined;
