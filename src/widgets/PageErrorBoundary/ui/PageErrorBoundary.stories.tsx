import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeType } from 'app/providers/themeProvider';
import { PageErrorBoundary } from './PageErrorBoundary';

export default {
    title: 'widgets/PageErrorBoundary',
    component: PageErrorBoundary,
    argTypes: {
        color: { control: 'color' },
    },
} as ComponentMeta<typeof PageErrorBoundary>;

const Template: ComponentStory<typeof PageErrorBoundary> = () => <PageErrorBoundary />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeType.Dark)];
