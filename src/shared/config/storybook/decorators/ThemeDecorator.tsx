import { Story } from '@storybook/react';
import { ThemeContextProvider, ThemeType } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: ThemeType) => (StoryComponent: Story) => (
    <ThemeContextProvider>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeContextProvider>
);
