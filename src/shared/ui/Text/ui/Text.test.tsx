import { render, screen } from '@testing-library/react';
import { ETextTheme, Text } from './Text';

describe('Text test', () => {
    test('text renders', () => {
        render(<Text text="test text" />);
        expect(screen.getByTestId('textWrapper')).toBeInTheDocument();
    });
    test('render with text', () => {
        render(<Text text="test text" />);
        expect(screen.getByText('test text')).toBeInTheDocument();
    });
    test('render with title', () => {
        render(<Text title="title text" />);
        expect(screen.getByText('title text')).toBeInTheDocument();
    });
    test('render with title and class', () => {
        render(<Text text="test text" title="title text" />);
        const title = screen.getByText('title text');
        const text = screen.getByText('test text');
        expect(text && title).toBeInTheDocument();
    });
    test('render with error', () => {
        render(<Text text="test text" textTheme={ETextTheme.ERROR} />);
        expect(screen.getByTestId('textWrapper')).toHaveClass('error');
    });
});
