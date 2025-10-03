import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/counter';
import { getCounterValue } from 'entities/counter/model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div data-testid="counter">
            <div data-testid="counter-value">{value}</div>
            <Button data-testid="increment-btn" onClick={() => increment()}>increment</Button>
            <Button data-testid="decrement-btn" onClick={() => decrement()}>decrement</Button>
        </div>
    );
};
