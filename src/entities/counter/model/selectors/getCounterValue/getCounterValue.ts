import { createSelector } from '@reduxjs/toolkit';
import { CounterScheme } from 'entities/counter';
import { getCounter } from '../getCounter/getCounter';

/**
 * Реселект createSelector позволяет на основании предыдущего селекта
 * (getCounter) выполнить вычисления, так же значение из createSelector
 * мемоизируются.
 *
 * Метод createSelector принимает первым аргументом предыдущие селекты
 * (одни или несколько), вторым аргументом callback для вычислений
 */
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterScheme) => counter.value,
);
