import React from 'react';
import renderer from 'react-test-renderer'
import { css } from '@linaria/core';

test('my pretty Container', () => {
  const tree = renderer.create(
    <header className={css`flex: 1;`}>text</header>
  );

  expect(tree).toMatchSnapshot();
});