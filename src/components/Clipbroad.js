import React, { useRef } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

export default function Clipboard({ copyText }) {
  const copyRef = useRef();
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(copyRef.current.innerText);
  };
  return (
    <ClipboardStyles>
      <a
        href={copyText}
        ref={copyRef}
        target="_blank"
        rel="noreferrer"
      >
        {copyText}
      </a>
      <button className="btn" type="button" onClick={copyToClipBoard}>
        <Icon icon="carbon:copy" />
      </button>
    </ClipboardStyles>
  );
}

const ClipboardStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: var(--black);
  }
  button {
    border: 0;
    padding: 1rem;
    display: grid;
    place-content: center;
  }
`;
