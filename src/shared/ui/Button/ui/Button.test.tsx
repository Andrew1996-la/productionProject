import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button test', () => {
    test('Default Button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('Button with theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
