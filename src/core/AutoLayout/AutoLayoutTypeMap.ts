import React from 'react';

import { BoxTypeMap } from '../Box';

import Direction from './Direction';
import Align from './Align';

type AutoLayoutTypeMap<P = {}, D extends React.ElementType = 'div'> = BoxTypeMap<P, D> & {
  props: {
    direction?: Direction;
    align?: Align,
    flex?: boolean;
  }
}

export default AutoLayoutTypeMap;
