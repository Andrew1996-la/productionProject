import { render, screen } from '@testing-library/react';
import { Button } from './Button';
test('Button test', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument();
})