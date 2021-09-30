import React, { useState } from 'react';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

import Layout from '../components/Layout';

export default function CalendarPage({ pageContext, data }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const dateFormatOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };

  return (
    <Layout>
      <CalendarPageStyles>
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
          dayClassName={(date) => (date.getDay() < Math.random() * 31 ? 'underlined' : '')}
          inline
        />
      </CalendarPageStyles>
    </Layout>
  );
}

const CalendarPageStyles = styled.div`
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
  }
  .react-datepicker__day-name, .react-datepicker__day {
    width: 3rem;
    line-height: 3rem;
    margin: 0.5rem;
    color: #333333;
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
