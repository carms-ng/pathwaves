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
      <button type="button" onClick={copyToClipBoard}>
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
    color: #333333;

  }
  button {
    border: 0;
    border-radius: var(--br);
    cursor: pointer;
    background: white;
    padding: 1rem;
    display: grid;
    place-content: center;
  }
  button:hover {
    background: var(--lightgrey);
  }
`;
