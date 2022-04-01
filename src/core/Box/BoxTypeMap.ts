import React from 'react';

import {
  OverridableTypeMap, RendererProps, StylerProps, TestableProps,
} from '../props';

interface BoxTypeMap<P = {}, D extends React.ElementType = 'div'>
  extends OverridableTypeMap {
  props: P &
    RendererProps & StylerProps & TestableProps & {
      children?: React.ReactNode;
      ref?: React.Ref<unknown>;
    };
  defaultComponent: D;
}

export default BoxTypeMap;
