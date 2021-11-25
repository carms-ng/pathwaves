import React, { useState } from 'react';
import styled from 'styled-components';
import { dateBreakdowner } from '../utils/helper';
import Accordion from './Accordion';

export default function FullSchedule({ page, courses, lang }) {
  const [phase, setPhase] = useState(1);

  // console.log(phase, courses);

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

  console.log(phaseGroups);
  const dates = phaseGroups[phase];
  console.log(dates);

  return (
    <FullScheduleStyles>
      <div className="wrapper-auth">
        <h2>{page.header}</h2>
        <p className="font-lg">{page.description}</p>

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

        <div>
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
        </div>

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
  .date {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    gap: 0 1rem;
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
