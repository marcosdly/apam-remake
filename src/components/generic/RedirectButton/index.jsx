import { useRef } from 'preact/hooks';
import './redirect-button.scss';

/** @import {ColorOption} from 'types/style' */
/** @import * as React from 'preact/compat' */

/**
 * @typedef RedirectButtonProps
 * @property {string} href Link to redirect to.
 * @property {string} text Button's text content.
 * @property {ColorOption} color Background color's name.
 * @property {'pill' | 'round-corners'} shape Button's shape.
 */

/** @param {RedirectButtonProps} props */
export default function RedirectButton(props) {
  const { href, text, shape, color } = props;

  /** @type {React.RefObject<HTMLAnchorElement>} */
  const link = useRef();

  return (
    <button
      type="button"
      className={`redirect-button font-sans ${shape} bg-${color}`}
      onClick={() => link.current?.click?.()}
    >
      <a ref={link} className="link" href={href}>
        {text}
      </a>
    </button>
  );
}
