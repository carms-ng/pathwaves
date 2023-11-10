import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

export default function Modal({ isOpen, setIsOpen }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // close model on keydown ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <ModalStyles role="dialog" aria-modal aria-labelledby="modal-title">
      <div
        aria-hidden
        id="overlay"
        onClick={() => setIsOpen(false)} // close modal on click outside
      />
      <div id="modal">
        {/* TODO: <img src="" alt="" /> */}
        <h2 id="modal-title">Model Title</h2>
        {/* TODO: Markdown supporting link bold and italic */}
        <button type="button" onClick={() => setIsOpen(false)}>
          <Icon icon="akar-icons:cross" width={30} height={30} />
        </button>
      </div>
    </ModalStyles>
  );
}

const ModalStyles = styled.div`
  div#overlay {
    content: "";
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background: var(--blue);
    opacity: 0.7;
    z-index: 100;
  }

  div#modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100vw;
    height: 100vh;

    @media (min-width: 640px) {
      height: 80vh;
      width: 80vw;
      border: 2px solid var(--black);
      border-radius: 16px;
    }

    background: var(--blue);
    z-index: 101;
  }

  button {
    background: unset;
    border: unset;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding: 2rem;
  }
`;
