import { StoreScheme } from 'app/providers/reduxProvider';

export const getLoginError = (store: StoreScheme) => store.login?.error || undefined;
