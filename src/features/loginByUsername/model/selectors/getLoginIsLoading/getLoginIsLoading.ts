import { StoreScheme } from 'app/providers/reduxProvider';

export const getLoginIsLoading = (store: StoreScheme) => store.login?.isLoading || false;
