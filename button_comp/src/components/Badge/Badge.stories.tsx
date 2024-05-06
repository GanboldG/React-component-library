import React from 'react';
import {StoryFn, Meta} from "@storybook/react";
import Badge from './Badge';

export default {
    title: "ReactComponentLibrary/Button",
    component: Badge,
} as Meta<typeof Badge>;

const Template1: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Badger = Template1.bind({});
Badger.args = {
    label: "Hello world!",
    constrast: "light",
    size: "large",
    color: "primary",
    radius: "default",
};