import React, { useState } from 'react';
import styled from 'styled-components';
import { CardsThreesStyles } from '../styles/InnerStyles';
import PhaseButtons from './PhaseButtons';

export default function Resources({ labels, links }) {
  const [phase, setPhase] = useState(1);

  // Group links by Phases
  const phaseGroups = links.nodes.reduce((groups, node) => {
    const obj = node.childMarkdownRemark.frontmatter;
    const num = obj.phaseNumber;
    // Create Empty Array if Date key doesn't exist
    if (!groups[num]) { groups[num] = []; }
    // Push artivity to the array
    groups[num].push(obj);
    return groups;
  }, {});

  return (
    <ResourcesStyles>
      {/* buttons */}
      <PhaseButtons labels={labels} phase={phase} setPhase={setPhase} />

      {/* cards */}
      <CardsThreesStyles>
        {phaseGroups[phase].map(({ title, description, url }) => (
          <a
            key={`${title}-${url}`}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <h3>{title}</h3>
            <p>{description}</p>
          </a>
        ))}
      </CardsThreesStyles>
    </ResourcesStyles>
  );
}

const ResourcesStyles = styled.div`
  display: grid;
  gap: 3rem;
  padding-bottom: 3rem;

  .btn-group {
    margin: 0 auto;
  }

  a {
    border-radius: var(--br);
    background: var(--white);
    padding: 2rem;
    &:hover {
       transform: scale(1.05);
    }
  }
  @media (min-width: 1024px) {
    gap: 5rem;
    a {
      padding: 3rem;
    }
  }

`;
