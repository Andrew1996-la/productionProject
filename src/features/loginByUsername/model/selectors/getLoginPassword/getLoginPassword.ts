import { StoreScheme } from 'app/providers/reduxProvider';

export const getLoginPassword = (store: StoreScheme) => store.login?.password || undefined;
