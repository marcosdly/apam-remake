/** @import React from 'preact/compat' */

/**
 * @typedef {object} PageSectionContext
 * @property {React.ReactElement} background
 * @property {React.ReactElement} foreground
 */

import { useEffect, useState } from 'preact/hooks';
import Header from '../Header';

/**
 * @typedef {object} PageLayoutProps
 * @property {PageSectionContext[]} sections
 */

/** @param {PageLayoutProps} props */
export default function PageLayout(props) {
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    addEventListener('wheel', (event) => {
      event.preventDefault();
      if (event.deltaY === 0) return;
      if (event.deltaY > 0) {
        // previous
        const prev = sectionIndex - 1;
        setSectionIndex(prev < 0 ? 0 : prev);
      } else {
        // next
        const next = sectionIndex + 1;
        const last = props.sections.length - 1;
        setSectionIndex(next > last ? last : next);
      }
    });

    // NOTE Force update
    addEventListener('resize', () => setSectionIndex(sectionIndex));
  }, []);

  const scroll = (
    <ol className="page-scroll">
      {props.sections.map((_, i) => (
        <li
          className={`indicator ${sectionIndex === i ? 'active' : ''}`}
          onClick={() => setSectionIndex(i)}
        ></li>
      ))}
    </ol>
  );

  return (
    <div className="page-layout">
      <Header />
      {scroll}
    </div>
  );
}
