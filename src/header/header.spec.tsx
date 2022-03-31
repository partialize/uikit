import React from 'react';
import renderer from 'react-test-renderer';
import Header from "./header";

test('my pretty Container', () => {
  const tree = renderer.create(
    <Header/>,
  );

  expect(tree).toMatchSnapshot();
});
