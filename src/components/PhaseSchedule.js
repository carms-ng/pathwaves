import React from 'react';
import styled from 'styled-components';
import { dateBreakdowner } from '../utils/helper';
import Accordion from './Accordion';

export default function PhaseSchedule({ dates, lang, page }) {
  return (
    <PhaseScheduleStyles>
      {Object.keys(dates).map((key) => {
        const {
          date, day, month, year,
        } = dateBreakdowner(new Date(key), lang);
        const items = dates[key];
        return (
          <div key={key}>
            <div className="date">
              <h2>{date}</h2>
              <small>{day}</small>
              <small>{`${month} ${year}`}</small>
            </div>
            <Accordion
              items={items}
              labelTime={page.labelTime}
              labelCourse={page.labelCourse}
            />
          </div>
        );
      })}
    </PhaseScheduleStyles>
  );
}

const PhaseScheduleStyles = styled.div`
  display: grid;
  gap: 5rem;

  .date {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    gap: 0 1rem;
    padding: 2rem 1rem;
    h2 {
      font-weight: 400;
      grid-row: 1 / -1;
    }
    small {
      margin: 0;
      padding: 0;
      color: var(--grey);
    }
  }
`;
