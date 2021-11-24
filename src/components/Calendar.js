import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import TimeTable from './TimeTable';
import Picker from './Picker';

export default function Calendar({
  courses, page, user, lang,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dateFormatOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  // Group courses by Date
  const dateGroups = courses.nodes.reduce((groups, node) => {
    const obj = node.childMarkdownRemark.frontmatter;
    const date = obj.start.split('T')[0];
    // Create Empty Array if Date key doesn't exist
    if (!groups[date]) { groups[date] = []; }
    // Push artivity to the array
    groups[date].push(obj);
    return groups;
  }, {});

  // Get courses on the selected date
  const selectedDateString = selectedDate.toISOString().split('T')[0];
  const selectedDateGroup = dateGroups[selectedDateString]
    ? dateGroups[selectedDateString].sort((a, b) => new Date(b.start) - new Date(a.start))
    : [];

  return (
    <CalendarStyles>
      <div className="wrapper-auth">
        {/* TODO: Navigation */}
        <div id="nav-auth">
          {/* discord button */}
          <a className="btn" href={page.button.url} target="_blank" rel="noreferrer">{page.button.linkText}</a>
        </div>

        <div id="greet">
          <h1>
            {page.header}
            {' '}
            <span>{user.name}</span>
            {' :)'}
          </h1>
          <p className="font-lg">
            {page.description}
            {' '}
            {selectedDate.toLocaleDateString(
              lang === 'en' ? 'en-US' : 'fr-CA',
              dateFormatOptions,
            )}
          </p>
        </div>

        <TimeTable
          selectedDateGroup={selectedDateGroup}
          id="timetable"
          page={page}
        />

        <Picker
          id="picker"
          lang={lang}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          dateGroups={dateGroups}
        />

        <a
          className="btn"
          id="btn-schedule"
          href="#schedule"
        >
          {page.labelSchedule}

        </a>
      </div>

    </CalendarStyles>
  );
}

const CalendarStyles = styled.section`
  min-height: 100vh;
  display: grid;
  max-width: var(--maxWidthSm);
  padding: var(--padSm);
  margin: 0 auto;

  #nav-auth{
    grid-area: nav-auth;
  }
  #greet {
    grid-area: greet;
    h1 {
      margin-bottom: 2rem;
      span {
        text-decoration: underline;
      }
    }
  }
  #timetable {
    grid-area: timetable;
    display: grid;
    gap: 4rem;
    padding: 1rem;
    > div {
      display: grid;
      align-content: flex-start;
      gap: 0.75rem;
      > div {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 2rem;
      }
    }
    p {
      margin: 0;
      padding: 0;
    }
    pre {
      color: var(--grey);
    }
  }
  #picker {
    grid-area: picker;
    justify-self: center;
    align-self: center;
    overflow-x: auto;
  }
  #btn-schedule {
    grid-area: btn-schedule;
  }

  .wrapper-auth {
    padding: 2rem;
    background-color: var(--offWhite);
    background-image: radial-gradient(127.15% 127.15% at 50% 50%, rgba(245, 206, 122, 0.75) 0%, rgba(204, 162, 195, 0.5) 8.33%, rgba(193, 211, 236, 0.554434) 22.92%, rgba(193, 211, 236, 0.5) 33.27%, rgba(193, 211, 236, 0.480769) 51.18%);
    border-radius: var(--br);
    display: grid;
    grid-template-areas:
      "nav-auth"
      "greet"
      "picker"
      "timetable"
      "btn-schedule";
    gap: 4rem;
    position: relative;

    > * {
      position: relative;
      z-index: 1;
    }

    &::after {
      z-index: 0;
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.5);
      border-radius: var(--br);
    }
  }


  @media(min-width: 1024px) {
    max-width: var(--maxWidthLg);
    padding: var(--padLg);


    #greet {
      padding: 0 3rem;
    }
    #timetable {
      padding: 0 3rem;
      max-height: 40vh;
      overflow-y: auto;
    }
    .wrapper-auth {
      padding: 5rem;
      grid-template-columns: 3fr 2fr;
      grid-template-rows: auto auto 1fr auto;
      grid-template-areas:
        "nav-auth picker"
        "greet picker"
        "timetable picker"
        "timetable btn-schedule";
    }
    .react-datepicker {
      padding: 3rem;
    }
  }
`;
