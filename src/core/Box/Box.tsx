import { createElement, forwardRef } from 'react';

import BoxProps from './BoxProps';

const Box = forwardRef<unknown, BoxProps>((props, ref) => {
  const {
    as = 'div',
    ...others
  } = props;

  return createElement(as, { ref, ...others });
});

export default Box;
