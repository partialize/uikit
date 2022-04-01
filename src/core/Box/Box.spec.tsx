import React from 'react';
import { render } from '@testing-library/react';

import { css } from '@linaria/core';

import { randomString, randomTestId } from '../random';

import Box from './Box';

let boxTestId: string;
beforeEach(() => {
  boxTestId = randomTestId();
});

describe('Box', () => {
  it('<Box />', () => {
    const { getByTestId } = render(<Box testId={boxTestId} />);
    const box = getByTestId(boxTestId);

    expect(box.tagName).toEqual('DIV');
  });

  it('<Box as=? />', () => {
    const { getByTestId } = render(<Box testId={boxTestId} as="a" />);
    const box = getByTestId(boxTestId);

    expect(box.tagName).toEqual('A');
  });

  it('<Box>{string}</Box>', () => {
    const children = randomString(10);
    const { getByTestId } = render(<Box testId={boxTestId}>{children}</Box>);
    const box = getByTestId(boxTestId);

    expect(box.tagName).toEqual('DIV');
    expect(box).toHaveTextContent(children);
  });

  it('<Box>{box}</Box>', () => {
    const children = <Box />;
    const { getByTestId } = render(<Box testId={boxTestId}>{children}</Box>);
    const box = getByTestId(boxTestId);

    expect(box.tagName).toEqual('DIV');
    expect(box.children.length).toEqual(1);
  });

  it('<Box className=? />', () => {
    const className = css`
      color: blue;
    `;
    const { getByTestId } = render(<Box testId={boxTestId} className={className} />);
    const box = getByTestId(boxTestId);

    expect(box.tagName).toEqual('DIV');
    expect(box.className).toEqual(className);
  });
});
