import { fireEvent, render, waitFor } from '@testing-library/preact';
import { test, expect } from 'vitest';
import Header from '.';

test('hamburguer menu state', async () => {
  const { container } = render(<Header />);
  const selector = '.hamburger-menu .indicator';
  await waitFor(() => expect(container.querySelector(selector)).toBeDefined());
  const indicator = container.querySelector(selector);
  const getState = () => indicator.classList.contains('active');
  // Explicit
  expect(getState()).toBe(false);
  fireEvent.click(indicator);
  expect(getState()).toBe(true);
  fireEvent.click(indicator);
  expect(getState()).toBe(false);
});

test('only one link active', async () => {
  const urls = ['/', '/comoajudar', '/adocao', '/campanhas'];
  const nav = '.nav-links';
  const anchors = '.nav-links .link';
  const { container } = render(<Header />);
  await waitFor(() =>
    expect(container.querySelectorAll(anchors)).toHaveLength(urls.length),
  );
  for (const pageHref of urls) {
    history.pushState({}, '', pageHref);
    location.reload();
    const countActive = urls.reduce((accumulator, elementHref) => {
      const anchor = container.querySelector(`${nav} [href="${elementHref}"]`);
      if (anchor?.classList?.contains('active')) return accumulator + 1;
      return accumulator;
    }, 0);
    expect(countActive).toEqual(1);
  }
});
