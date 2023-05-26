import React, { useState } from 'react';
import styled from 'styled-components';
import PhaseButtons from './PhaseButtons';
import PhaseSchedule from './PhaseSchedule';

export default function FullSchedule({
  page, events, lang, labelPhases,
}) {
  const [selectedPhase, setSelectedPhase] = useState(1);

  const eventsByPhase = events.reduce((groups, event) => {
    const { date, phaseNumber } = event;
    if (!groups[phaseNumber]) {
      groups[phaseNumber] = { [date]: [event] };
    } else {
      groups[phaseNumber][date] = [...(groups[phaseNumber][date] || []), event];
    }
    return groups;
  }, {});

  return (
    <FullScheduleStyles id="full-schedule">
      <div className="wrapper-auth">
        <h2>{page.header}</h2>

        <PhaseButtons labels={labelPhases} phase={selectedPhase} setPhase={setSelectedPhase} />

        <PhaseSchedule dates={eventsByPhase[selectedPhase]} lang={lang} page={page} />
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
