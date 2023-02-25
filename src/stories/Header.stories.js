import React from 'react';
import {Header} from "../components/header-footer/Header";

const Template = (args) => <Header {...args} />;


export default {
  title: 'Main Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const SmallHeader = Template.bind({});
SmallHeader.args = {
	label: "Small Header",
	height: "50px"
};
