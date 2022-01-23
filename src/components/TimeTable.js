import React from 'react';
import { Icon } from '@iconify/react';
import ReactMarkdown from 'react-markdown';
import Clipboard from './Clipbroad';

export default function TimeTable({ selectedDateGroup, id, page }) {
  if (selectedDateGroup.length === 0) {
    return (
      <div id={id}>
        <h3>{page.noneText}</h3>
      </div>
    );
  }

  return (
    <div id={id}>
      {selectedDateGroup?.map(({
        title, description, presenter, start, end, linkZoom,
      }) => (
        <div key={start} style={{ textAlign: 'left' }}>
          <p style={{ color: 'var(--grey)' }}>
            <span>{new Date(start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            {' - '}
            <span>{new Date(end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </p>
          <h3>{title}</h3>
          <ReactMarkdown>{description}</ReactMarkdown>
          <div>
            <Icon icon="bi:person" />
            <p>{presenter}</p>
          </div>

          <div>
            <Icon icon="grommet-icons:zoom" />
            <Clipboard copyText={linkZoom} />
          </div>
        </div>
      ))}
    </div>
  );
}
