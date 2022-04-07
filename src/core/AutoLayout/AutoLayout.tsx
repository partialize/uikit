import React from 'react';
import { css, cx } from '@linaria/core';

import Box from '../Box';

import { OverridableComponent } from '../type';
import AutoLayoutTypeMap from './AutoLayoutTypeMap';
import Direction from './Direction';

const directionCss: Record<Direction, string> = {
  horizontal: css`
    display: flex; 
    flex-direction: row;
    align-items: center;
  `,
  vertical: css`
    display: flex;
    flex-direction: column; 
    align-items: stretch
  `,
};

const flexCss = {
  true: css`
    flex: 1;
  `,
  false: null,
};

const alignCss = {
  start: css`
    align-items: flex-start;
  `,
};

const AutoLayout: OverridableComponent<AutoLayoutTypeMap> = (props) => {
  const {
    direction = 'horizontal',
    flex = false,
    align = null,
    className,
    ...other
  } = props;

  return (
    <Box
      className={
        cx(
          directionCss[direction],
          flexCss[flex],
          direction === 'horizontal' && align === 'top' && alignCss.start,
          className,
        )
      }
      {...other}
    />
  );
};

export default AutoLayout;
