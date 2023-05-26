import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import TimeTable from './TimeTable';
import Picker from './Picker';
import NavAuth from './NavAuth';

export default function Calendar({
  events, page, user, lang, nav, slug, showFullSchedule, setShowFullSchedule,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dateFormatOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  const selectedDateString = selectedDate.toLocaleDateString();

  const eventsByDate = events.reduce((groups, event) => {
    groups[event.date] = [...(groups[event.date] || []), event];
    return groups;
  }, {});

  // Handle display full schedule
  const toggleFullSchedule = () => {
    const updatedShow = !showFullSchedule;
    setShowFullSchedule(updatedShow);
    const scrollTop = window.scrollY + window.innerHeight;
    if (updatedShow) {
      setTimeout(() => {
        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth',
        });
      }, 50);
    }
  };

  return (
    <CalendarStyles>
      <div className="wrapper-auth">
        <NavAuth
          id="nav-auth"
          className="btn-group"
          nav={nav}
          slug={slug}
          lang={lang}
        />

        <div id="greet">
          <h1 className="h2">
            {page.header}
            {' '}
            <span>{user.name}</span>
            {' :)'}
          </h1>
          <p style={{ fontSize: '2rem' }}>
            {page.description}
            {' '}
            {selectedDate.toLocaleDateString(
              lang === 'en' ? 'en-US' : 'fr-CA',
              dateFormatOptions,
            )}
          </p>
        </div>

        <TimeTable
          selectedEvents={eventsByDate[selectedDateString] || []}
          eventsByDate={eventsByDate}
          id="timetable"
          page={page}
        />

        <Picker
          id="picker"
          lang={lang}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          eventDates={Object.keys(eventsByDate)}
        />

        <button
          type="button"
          className="btn"
          id="btn-schedule"
          onClick={toggleFullSchedule}
        >
          {showFullSchedule ? page.labelScheduleHide : page.labelScheduleShow}
        </button>
      </div>

    </CalendarStyles>
  );
}

const CalendarStyles = styled.section`
  min-height: calc(100vh - 50px);
  display: grid;
  max-width: var(--maxWidthSm);
  padding: var(--padSm);
  padding-top: 8rem;
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
    place-self: center;
    padding: 0.5rem 6rem;
  }

  .wrapper-auth {
    text-align: center;
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
      background: rgba(255, 255, 255, 0.6);
      border-radius: var(--br);
    }
  }

  @media(min-width: 1024px) {
    max-width: var(--maxWidthLg);
    padding: var(--padLg);
    padding-bottom: 5rem;
    #greet {
      padding: 0 3rem;
    }
    #timetable {
      padding: 0 3rem;
      height: 40vh;
      overflow-y: auto;
    }
    .wrapper-auth {
      padding-bottom: 5rem;
      text-align: left;
      grid-template-columns: 3fr 2fr;
      grid-template-rows: auto auto 1fr auto;
      grid-template-areas:
        "nav-auth picker"
        "greet picker"
        "timetable picker"
        "timetable btn-schedule";
    }
  }
`;
