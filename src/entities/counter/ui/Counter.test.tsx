import { fireEvent, screen } from '@testing-library/react';
import { Counter } from 'entities/counter';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';

describe('Counter test', () => {
    test('Render counter', () => {
        renderWithTranslation({
            component: <Counter />,
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter')).toBeInTheDocument();
    });

    test('counterValue', () => {
        renderWithTranslation({
            component: <Counter />,
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });

    test('counter increment', () => {
        renderWithTranslation({
            component: <Counter />,
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('counter decrement', () => {
        renderWithTranslation({
            component: <Counter />,
            initialState: { counter: { value: 10 } },
        });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
