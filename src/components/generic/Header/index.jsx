import { useRef } from 'preact/hooks';
import fullLogo from '../../../../assets/full-logo-optimized.svg';
import smallLogo from '../../../../assets/notext-logo-optimized.svg';
import RedirectButton from '../RedirectButton';
import './header.scss';

function LinkContainer({ children }) {
  return (
    <nav className="nav-links font-sans">
      <ol>{children}</ol>
    </nav>
  );
}

/**
 * @typedef LinkProps
 * @property {string} href
 * @property {string} text
 */

/** @param {LinkProps} props */
function Link(props) {
  /** @type {import('preact').RefObject<HTMLAnchorElement>} */
  const anchor = useRef();

  return (
    <li onClick={() => anchor.current?.classList.toggle('active')} className="link">
      <a ref={anchor} className="anchor" href={props.href}>
        {props.text}
      </a>
    </li>
  );
}

export default function Header() {
  return (
    <div id="page-header">
      <div className="logo-container">
        <img src={fullLogo} className="full-logo" />
        <img src={smallLogo} className="small-logo" />
      </div>
      <LinkContainer>
        <Link href="/" text="Home" />
        <Link href="/comoajudar" text="Como Ajudar" />
        <Link href="/adocao" text="Adoção" />
        <Link href="/campanhas" text="Campanhas" />
      </LinkContainer>
      <RedirectButton href="/doar" text="Doar" shape="pill" color="ocean-green" />
    </div>
  );
}
