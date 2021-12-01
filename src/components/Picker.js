import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

export default function Picker({
  id, lang, selectedDate, setSelectedDate, dateGroups,
}) {
  return (
    <PickerStyles id={id}>
      <DatePicker
        locale={lang}
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
    </PickerStyles>
  );
}

const PickerStyles = styled.section`
  /* Styling the picker */
  .react-datepicker {
    border: 0;
    padding: 1rem;
    border-radius: var(--br);
    border: 1px solid var(--lightgrey);
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
  .react-datepicker__day--outside-month {
    color: var(--grey);
  }
  .react-datepicker__day-name, .react-datepicker__day {
    width: 3rem;
    line-height: 3rem;
    margin: 0.5rem;
    border-radius: 50%;
  }
  .react-datepicker__day--selected {

    &.underlined::after {
      background: #000;
    }
  }
  .react-datepicker__day--selected:not(.react-datepicker__day--today) {
    background: rgba(13, 203, 148, 0.5);
    color: #000;
  }
  .react-datepicker__day--today {
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
  @media(min-width: 1024px) {
    .react-datepicker {
      padding: 3rem;
    }
  }
`;
