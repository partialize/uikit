import * as React from 'react';
import { Meta } from '@storybook/react';
import header from './header';

const meta: Meta = {
  title: 'header',
  component: header,
};

export const headerTest = () => <header>test</header>;
export default meta;
