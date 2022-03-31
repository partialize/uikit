import React from 'react';
import { css } from '@linaria/core';

// Write your styles in `css` tag
const header = css`
  text-transform: uppercase;
  background-color: red;
`;

const Header: React.FC = () => <h1 className={header}>Hello world</h1>;

export default Header;
