import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';

export const LazyLoadDecorator = (StoryComponent: Story) => (
    <Suspense fallback={<Loader />}>
        <StoryComponent />
    </Suspense>
);
