import { CounterScheme } from 'entities/counter';
import { IUserSchema } from 'entities/user';

export interface StoreScheme {
    counter: CounterScheme,
    authData: IUserSchema
}
