import React from 'react';
import { Icon } from '@iconify/react';
import Clipboard from './Clipbroad';

export default function TimeTable({ selectedEvents, id, page }) {
  if (selectedEvents.length === 0) {
    return (
      <div id={id}>
        <h3>{page.noneText}</h3>
      </div>
    );
  }

  return (
    <div id={id} style={{ width: '100%' }}>
      {selectedEvents?.map(({
        title, presenter, start, end, linkZoom,
      }) => (
        <div key={title + start} style={{ textAlign: 'left' }}>
          <p style={{ color: 'var(--grey)', maxWidth: 'unset' }}>
            <span>{start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            {' - '}
            <span>{end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </p>
          <h3 style={{ maxWidth: 'unset' }}>{title}</h3>
          <div>
            <Icon icon="bi:person" />
            <p style={{ maxWidth: 'unset' }}>{presenter}</p>
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
