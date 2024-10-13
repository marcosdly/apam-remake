import { assert, describe, test } from 'vitest';
import PageLayout from '.';
import { fireEvent, render } from '@testing-library/preact';
import { expect } from 'vitest';

const dummyLayoutProps = { background: <></>, foreground: <></> };

describe('scroll', () => {
  test('correct elements', () => {
    const amount = 17;
    const sections = Array(amount).fill(dummyLayoutProps);
    const { container } = render(<PageLayout sections={sections} />);
    const elements = Array.from(
      container.querySelectorAll('.page-scroll .indicator').values(),
    );

    expect(elements).toHaveLength(amount);
    assert(elements[0].classList.contains('active'));

    const countActive = elements.reduce(
      (prev, curr) => (curr.classList.contains('active') ? prev + 1 : prev),
      0,
    );

    expect(countActive).toEqual(1);
  });

  test('valid state', () => {
    const sections = Array(20).fill(dummyLayoutProps);
    const choose = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const { container } = render(<PageLayout sections={sections} />);
    const elements = Array.from(
      container.querySelectorAll('.page-scroll .indicator').values(),
    );

    for (let i = 0; i < 50; ++i) {
      fireEvent.click(choose(elements));
      const active = elements.findIndex((elem) => elem.classList.contains('active'));
      assert(active !== -1); // assert one has been found
      assert(elements[active].classList.contains('active'));
      const count = elements.reduce(
        (prev, curr) => (curr.classList.contains('active') ? prev + 1 : prev),
        0,
      );
      assert(count === 1);
    }
  });
});

describe('background offset', () => {
  test.skip('correct property is changed');

  test.skip('valid state');
});

describe('foreground', () => {
  test.skip('correct property is changed');

  test.skip('valid state');
});
