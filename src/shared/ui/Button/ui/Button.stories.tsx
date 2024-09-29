import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear button',
    theme: ThemeButton.CLEAR,
};
export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline button',
    theme: ThemeButton.OUTLINE,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Primary button',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Clear button',
    theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Outline button',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
