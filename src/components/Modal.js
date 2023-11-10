import React, { useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

export default function Modal({ isOpen, setIsOpen, title, img, body }) {
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
        <ModalImageWrapper>
          <GatsbyImage image={getImage(img.image)} alt={img.alt} />
        </ModalImageWrapper>
        <ModalContentWrapper>
          <h2 id="modal-title">{title}</h2>
          <ReactMarkdown>{body}</ReactMarkdown>
        </ModalContentWrapper>
      </div>
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="btn-blur"
      >
        <Icon icon="akar-icons:cross" width={24} height={24} />
      </button>
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
      border-radius: var(--br);
    }

    background: var(--blue);
    z-index: 101;
    overflow: scroll;
  }

  button {
    background: unset;
    border: unset;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 1rem;

    @media (min-width: 640px) {
      top: calc(10vh + 1rem);
      right: calc(10vw + 1rem);
    }

    padding: 1rem;
    z-index: 102;
  }
`;

const ModalImageWrapper = styled.div`
  width: 100%;
  height: 25vh;
  overflow: auto;
`;

const ModalContentWrapper = styled.div`
  padding: 1rem;
  h2 {
    margin: 2rem auto;
  }
  a {
    color: var(--darkblue);
    text-decoration: underline;
  }
`;
