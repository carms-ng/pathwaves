import React, { useState } from 'react';
import styled from 'styled-components';

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
      <div className="btn-group">
        {Object.keys(labels).map((key, index) => (
          <button
            key={key}
            type="button"
            className={`btn btn-auth ${phase === index + 1 ? 'active' : ''}`}
            onClick={() => setPhase(index + 1)}
          >
            {labels[key]}
          </button>
        ))}
      </div>

      {/* cards */}
      <div className="cards-resources">
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
      </div>
    </ResourcesStyles>
  );
}

const ResourcesStyles = styled.div`
  display: grid;
  gap: 3rem;
  .btn-group {
    margin: 0 auto;
  }
  .cards-resources {
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(260px, 1fr) );
    justify-items: center;
    grid-gap: 3rem;
  }
  a {
    padding: 2rem;
    background: var(--white);
    border-radius: var(--br);
    color: var(--black);
    transition: var(--trans);

    &:hover {
      transform: scale(1.05);
    }
  }
  h3 {
    margin-bottom: 1.5rem;
  }
  @media (min-width: 1024px) {
    gap: 5rem;

    a {
      padding: 3rem;
    }
  }
`;
