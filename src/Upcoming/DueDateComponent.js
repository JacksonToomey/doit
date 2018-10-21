import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Chip, Avatar, FontIcon } from 'react-md';

const dateFormat = 'MMMM Do, YYYY';

const DueDateComponent = ({ dueDate }) => {
  const dateString = format(dueDate, dateFormat);
  if (dueDate > new Date()) {
    return <div>{dateString}</div>;
  }

  return (
    <Chip
      label={dateString}
      avatar={(
        <Avatar
          icon={<FontIcon>alarm</FontIcon>}
          suffix="red"
        >
          A
        </Avatar>
      )}
    />
  );
};

DueDateComponent.propTypes = {
  dueDate: PropTypes.instanceOf(Date).isRequired,
};

export default DueDateComponent;
