import React from 'react';

import { OverridableTypeMap, RendererProps, StylerProps } from '../props';

interface BoxTypeMap<P = {}, D extends React.ElementType = 'div'>
  extends OverridableTypeMap {
  props: P &
    RendererProps & StylerProps & {
      children?: React.ReactNode;
      ref?: React.Ref<unknown>;
    };
  defaultComponent: D;
}

export default BoxTypeMap;
