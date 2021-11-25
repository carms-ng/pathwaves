import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

export default function Accordion({ items, labelTime, labelCourse }) {
  console.log(items);
  const [active, setActive] = useState(null);
  return (
    <AccordionStyles>
      {items.map(({
        title, description, start, end, presenter, linkZoom,
      }, index) => (
        <div key={start + end} className={active === index ? 'active' : ''}>
          {index === 0 && <h4>{labelTime}</h4>}
          {index === 0 && <h4>{labelCourse}</h4>}
          <div>
            <pre>{new Date(start).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}</pre>
            <pre style={{ color: 'var(--grey)' }}>{new Date(end).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}</pre>
          </div>
          <div className="accordion-item">
            <h3>{title}</h3>
            <p>{description}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon icon="bi:person" />
              <p style={{ margin: 0, marginLeft: '1rem', padding: 0 }}>{presenter}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Icon icon="grommet-icons:zoom" />
              <p style={{ margin: 0, marginLeft: '1rem', padding: 0 }}>{linkZoom}</p>
            </div>
          </div>
        </div>
      ))}
    </AccordionStyles>
  );
}

const AccordionStyles = styled.div`
  > * {
    display: inline-grid;
    grid-template-columns: auto 1fr;
    grid-gap: 4rem 0;

    > * {
      padding: 0 1rem;
    }
    > div:nth-child(odd) {
      border-right: 3px solid var(--black);
    }
  }
`;
