import { createElement, forwardRef } from 'react';

import BoxProps from './BoxProps';

const Box = forwardRef<unknown, BoxProps>((props, ref) => {
  const {
    as = 'div',
    testId,
    children,
    ...others
  } = props;

  return createElement(as, { 'data-testid': testId, ref, ...others }, children);
});

export default Box;
