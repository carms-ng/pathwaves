import React, { useState } from 'react';
import styled from 'styled-components';
import PhaseSchedule from './PhaseSchedule';

export default function FullSchedule({ page, courses, lang }) {
  const [phase, setPhase] = useState(1);

  const phaseGroups = courses.nodes.reduce((groups, node) => {
    const obj = node.childMarkdownRemark.frontmatter;
    if (!groups[obj.phaseNumber]) { groups[obj.phaseNumber] = []; }
    groups[obj.phaseNumber].push(obj);
    return groups;
  }, {});

  Object.keys(phaseGroups).forEach((key) => {
    phaseGroups[key] = phaseGroups[key].reduce((group, entry) => {
      const date = entry.start.split('T')[0];
      if (!group[date]) { group[date] = []; }
      group[date].push(entry);
      return group;
    }, {});
  });

  const dates = phaseGroups[phase];

  return (
    <FullScheduleStyles>
      <div className="wrapper-auth">
        <h2>{page.header}</h2>
        <div className="button-group">
          <button
            className={`btn btn-auth ${phase === 1 ? 'active' : ''}`}
            type="button"
            onClick={() => setPhase(1)}
          >
            {page.labelPhaseOne}
          </button>

          <button className={`btn btn-auth ${phase === 2 ? 'active' : ''}`} type="button" onClick={() => setPhase(2)}>{page.labelPhaseTwo}</button>
          <button className={`btn btn-auth ${phase === 3 ? 'active' : ''}`} type="button" onClick={() => setPhase(3)}>{page.labelPhaseThree}</button>
        </div>

        <p className="font-lg">{page.description}</p>

        <PhaseSchedule dates={dates} lang={lang} page={page} />

      </div>
    </FullScheduleStyles>
  );
}

const FullScheduleStyles = styled.section`
  max-width: var(--maxWidthSm);
  padding: var(--padSm);
  margin: 0 auto;

  .wrapper-auth {
    padding: 2rem;
    background: var(--offWhite);
    border-radius: var(--br);
    display: grid;
    gap: 4rem;
  }

  .button-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin: 0 auto;
  }
  .btn-auth {
    border: 0;
    font-weight: 400;
    padding: 0.5rem 1rem;
    background: transparent;

    &:hover {
      background: var(--blue);
      color: var(--blck);
    }
    &.active {
      background: var(--blue);
      font-weight:700;
    }
  }
  @media(min-width: 1024px) {
    max-width: var(--maxWidthLg);
    padding: var(--padLg);
    .wrapper-auth {
      padding: 5rem;
    }
    h2, .font-lg {
      text-align: center;
      margin: 0 auto;
    }
    .button-group {
      gap: 3rem;
      padding: 1rem 0 3rem 0;

    }
    .btn-auth {
      padding: 0.5rem 3rem;
    }
  }
`;
