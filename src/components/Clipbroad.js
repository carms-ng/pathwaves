import React, { useRef } from 'react';
import styled from 'styled-components';

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
        📋
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
    padding: 10px;
    border-radius: var(--br);
    cursor: pointer;
    background: transparent;
  }
  button:hover {
    background: var(--lightgrey);
  }
`;
