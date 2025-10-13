import { CounterScheme } from 'entities/counter';
import { IUserSchema } from 'entities/user';
import { ILoginByUsernameSchema } from 'features/loginByUsername';

export interface StoreScheme {
    counter: CounterScheme,
    userData: IUserSchema,
    login: ILoginByUsernameSchema
}
