import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input test', () => {
    test('Default Input', () => {
        render(<Input value="Test" />);
        expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
    });
    test('calls onChange when value changes', () => {
        const handleChange = jest.fn();
        render(<Input value="" onChange={handleChange} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'New Value' } });

        expect(handleChange).toHaveBeenCalledWith('New Value');
    });
});
