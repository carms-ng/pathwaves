import React, { useState } from 'react';
import styled from 'styled-components';
import PhaseButtons from './PhaseButtons';
import PhaseSchedule from './PhaseSchedule';

export default function FullSchedule({
  page, courses, lang, labelPhases,
}) {
  const [phase, setPhase] = useState(1);

  const phaseGroups = courses.nodes.reduce((groups, node) => {
    const obj = node.childMarkdownRemark.frontmatter;
    if (!groups[obj.phaseNumber]) { groups[obj.phaseNumber] = []; }
    groups[obj.phaseNumber].push(obj);
    return groups;
  }, {});

  Object.keys(phaseGroups).forEach((key) => {
    phaseGroups[key] = phaseGroups[key].reduce((group, entry) => {
      const date = new Date(entry.start).toLocaleDateString();
      if (!group[date]) { group[date] = []; }
      group[date].push(entry);
      return group;
    }, {});
  });

  return (
    <FullScheduleStyles id="full-schedule">
      <div className="wrapper-auth">
        <h2>{page.header}</h2>

        <PhaseButtons labels={labelPhases} phase={phase} setPhase={setPhase} />

        <PhaseSchedule dates={phaseGroups[phase]} lang={lang} page={page} />
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
  .btn-group {
    margin: 0 auto;
  }
  @media(min-width: 1024px) {
    max-width: var(--maxWidthLg);
    padding: var(--padLg);
    padding-top: 1rem;
    .wrapper-auth {
      padding: 5rem;
    }
    h2 {
      text-align: center;
      margin: 0 auto;
    }
  }
`;
