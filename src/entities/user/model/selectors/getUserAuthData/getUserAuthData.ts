import { StoreScheme } from 'app/providers/reduxProvider';

export const getUserAuthData = (state: StoreScheme) => state.userData.authData;
