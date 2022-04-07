import React from 'react';

import { OverrideProps } from '../type';

import AutoLayoutTypeMap from './AutoLayoutTypeMap';

type AutoLayoutProps <
  D extends React.ElementType = AutoLayoutTypeMap['defaultComponent'],
  P = {},
  > = OverrideProps<AutoLayoutTypeMap<P, D>, D>;

export default AutoLayoutProps;
