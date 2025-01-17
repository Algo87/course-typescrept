import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({ loginForm: { username: 'Test name', password: '123' } })];

export const LoginFormWithError = Template.bind({});
LoginFormWithError.args = {};
LoginFormWithError.decorators = [StoreDecorator({ loginForm: { username: 'Test name', password: '123', error: 'Error' } })];

export const LoginFormIsLoading = Template.bind({});
LoginFormIsLoading.args = {};
LoginFormIsLoading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];
