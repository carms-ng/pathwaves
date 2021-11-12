import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import Clipboard from './Clipbroad';

export default function Calendar({ data }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dateFormatOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  // Group activities by Date
  const dateGroups = data.allFile.nodes.reduce((groups, node) => {
    const obj = node.childMarkdownRemark.frontmatter;
    const date = obj.start.split('T')[0];
    // Create Empty Array if Date key doesn't exist
    if (!groups[date]) { groups[date] = []; }
    // Push artivity to the array
    groups[date].push(obj);
    return groups;
  }, {});

  // Get Activities on the selected date
  const selectedDateString = selectedDate.toISOString().split('T')[0];
  const selectedDateGroup = dateGroups[selectedDateString]
    ? dateGroups[selectedDateString].sort((a, b) => new Date(b.start) - new Date(a.start))
    : [];

  return (
    <CalendarStyles>
      <h1>Calendar</h1>
      <p>
        Selected Date:
        {' '}
        {selectedDate.toLocaleDateString('en-US', dateFormatOptions)}
      </p>

      <DatePicker
        locale="en"
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        dayClassName={(date) => {
          const dateString = date.toISOString().split('T')[0];
          const hasEvent = Object.keys(dateGroups).includes(dateString);
          return (hasEvent ? 'underlined' : '');
        }}
        inline
      />
      <div>
        {selectedDateGroup?.map((activity) => (
          <div key={activity.start}>
            <p>{new Date(activity.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <h3>{activity.title}</h3>
            <Clipboard copyText={activity.activity_link} />
          </div>
        ))}
      </div>
    </CalendarStyles>
  );
}

const CalendarStyles = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;

  .react-datepicker {
    border: 0;
    padding: 1rem;
    font-family: 'ApfelGrotezk', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
  }
  .react-datepicker__header {
    border-bottom: 0;
    background: transparent;
  }
  .react-datepicker__navigation {
    top: 1.8rem;
  }
  .react-datepicker__current-month {
    font-size: 2rem;
  }
  .react-datepicker__day--keyboard-selected {
    background: 0;
    color: #333333
  }
  .react-datepicker__day-name, .react-datepicker__day {
    width: 3rem;
    line-height: 3rem;
    margin: 0.5rem;
    border-radius: 50%;
  }
  .react-datepicker__day--selected {
    background: #0DCB94;
    color: #fff;
    &.underlined::after {
      background: #fff;
    }
  }
  .underlined {
    position: relative;
  }
  .underlined::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 50%;
    height: 1px;
    width: 1rem;
    transform: translateX(-50%);
    background: #333333;
  }
`;
