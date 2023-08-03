import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from './RadioButton'

export default {
    title: 'old-comp/RadioButton',
    component: RadioButton,
}

const Template = (args) => <RadioButton {...args} />;

export const Hello = Template.bind({});
Hello.args = {
    value: "Hello",
    name: "Hello"
};


export const World = Template.bind({});
World.args = {
    value: "World",
    name: "World"
};


export const Default = Template.bind({});
Default.args = {
    defaultChecked: true,
    value: "default",
    name: "default",
};