import React from 'react';
import renderer from 'react-test-renderer';

test('my pretty Container', () => {
  const tree = renderer.create(
    <header>text</header>,
  );

  expect(tree).toMatchSnapshot();
});
