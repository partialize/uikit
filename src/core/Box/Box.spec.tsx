import React, { CSSProperties } from 'react';
import { render } from '@testing-library/react';

import { css } from '@linaria/core';

import { randomString, randomTestId } from '../random';

import Box from './Box';

let boxTestId: string;
beforeEach(() => {
  boxTestId = randomTestId();
});

it('should tag is div when default render', () => {
  const { getByTestId } = render(<Box testId={boxTestId} />);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('DIV');
});

it('should tag is changed when use as props', () => {
  const { getByTestId } = render(<Box testId={boxTestId} as="a" />);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('A');
});

it('should children is rendered when children is string', () => {
  const children = randomString(10);
  const { getByTestId } = render(<Box testId={boxTestId}>{children}</Box>);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('DIV');
  expect(box).toHaveTextContent(children);
});

it('should children is rendered when children is element', () => {
  const children = <Box />;
  const { getByTestId } = render(<Box testId={boxTestId}>{children}</Box>);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('DIV');
  expect(box.children.length).toEqual(1);
});

it('should className is applied when className is exit', () => {
  const className = css`
      color: blue;
    `;
  const { getByTestId } = render(<Box testId={boxTestId} className={className} />);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('DIV');
  expect(box.className).toEqual(className);
});

it('should style is applied when style is exit', () => {
  const style: CSSProperties = {
    color: 'blue',
  };
  const { getByTestId } = render(<Box testId={boxTestId} style={style} />);
  const box = getByTestId(boxTestId);

  expect(box.tagName).toEqual('DIV');
  expect(box).toHaveStyle('color: blue;');
});
