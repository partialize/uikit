import * as React from 'react';
import { Meta } from '@storybook/react';
import Header from './header';

const meta: Meta = {
  title: 'header',
  component: Header,
};

export const headerTest = () => <Header />;
export default meta;
