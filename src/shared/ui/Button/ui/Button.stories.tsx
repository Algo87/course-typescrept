import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.CLEAR,
};
export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline button',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Outline button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Outline button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Outline button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Primary button',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Clear button',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Clear',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Outline button',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED,

};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,

};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,

};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,

};

export const Background = Template.bind({});
Background.args = {
    children: 'button',
    theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'button',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    disabled: true,
};
