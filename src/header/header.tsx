import React from 'react';
import { css } from '@linaria/core';
import { modularScale, hiDPI } from 'polished';

// Write your styles in `css` tag
const header = css`
  text-transform: uppercase;
  font-size: ${modularScale(2)};
  background-color: red;

  ${hiDPI(1.5)} {
    font-size: ${modularScale(2.5)};
  }
`;

const Header: React.FC = () => <h1 className={header}>Hello world</h1>;

export default Header;
