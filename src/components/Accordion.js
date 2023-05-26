import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export default function Accordion({ items, page: { labelTime, labelCourse, labelCalendar } }) {
  const [active, setActive] = useState(null);

  return (
    <AccordionStyles>
      {items.map(({
        title, description, start, end, presenter, linkCalendar,
      }, index) => (
        <div className="accordion-item" key={title + end}>
          {index === 0 && <h4>{labelTime}</h4>}
          {index === 0 && <h4>{labelCourse}</h4>}
          <div>
            <pre>{new Date(start).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}</pre>
            <pre style={{ color: 'var(--grey)' }}>{new Date(end).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}</pre>
          </div>
          <div className={active === index ? 'expanded' : ''}>
            <button
              type="button"
              className="btn btn-accordion"
              onClick={() => setActive(active === index ? null : index)}
            >
              {title}
              <Icon icon="akar-icons:chevron-down" className="icon-chevron" />
            </button>
            <div className="accordion-dropdown">
              <ReactMarkdown>{description}</ReactMarkdown>
              <div>
                <Icon icon="bi:person" />
                <p>{presenter}</p>
              </div>
              <a
                className="link"
                href={linkCalendar}
                target="_blank"
                rel="noreferrer"
                style={{ padding: '1rem 0 2rem 0' }}
              >
                {labelCalendar}

              </a>
            </div>
          </div>
        </div>
      ))}
    </AccordionStyles>
  );
}

const AccordionStyles = styled.div`
  h4 {
    margin-bottom: 1rem;
  }
  .accordion-item {
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;

    > * {
      padding: 0.5rem 1rem;
    }

    > div:nth-child(odd) {
      border-right: 3px solid var(--black);
    }
  }
  .btn-accordion {
    border: 0;
    width: 100%;
    background-color: var(--neutral);
    padding: 1.5rem 2rem;
    display: grid;
    grid-template-columns: 1fr 16px;
    align-items: center;
    color: var(--black);
    white-space: unset;
    text-align: left;
    gap: 0.5rem;
    &:hover {
      background-color: #d6d8cb;
      color: var(--black);
    }
  }

  .accordion-dropdown {
    height: auto;
    max-height: 0;
    transition: var(--trans);
    overflow-y: hidden;
    background: var(--neutral);
    border-radius: 0 0 var(--br) var(--br);
    display: grid;
    gap: 1rem;
    padding-left: 2rem;
    > * {
      padding-right: 1rem;
      margin: unset;
    }
    > div {
      display: flex;
      align-items: center;

      > p {
        padding: 0;
        margin-left: 1rem;
      }
    }
    > div:last-child {
      padding-bottom: 2rem;
    }
  }

  .icon-chevron {
    transition: var(--trans);
  }
  .expanded {
    .icon-chevron {
      transform: rotate(-180deg);
    }
    .btn-accordion {
      border-radius: var(--br) var(--br) 0 0;
    }
    .accordion-dropdown {
      max-height: 1000px; /* try to guess a max-height for your content */
    }
  }
  @media(min-width: 1024px) {
    .accordion-item > * {
      padding: 1rem 4rem;
    }
    .btn-accordion, .accordion-dropdown {
      padding-left: 5rem;
    }
    .accordion-dropdown {
      padding-left: 5rem;
      & > * {
        padding-right: 3rem;
      }
    }
  }
`;
