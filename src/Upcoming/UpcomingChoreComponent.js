import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
} from 'react-md';
import DueDateComponent from 'Upcoming/DueDateComponent';
import models from 'Upcoming/models';

const UpcomingChoreComponent = ({
  chore,
  onComplete,
}) => (
  <Card className="upcoming-chore">
    <CardTitle
      title={chore.name}
      subtitle={<DueDateComponent dueDate={chore.dueDate} />}
      expander
    />
    <CardText expandable>
      {chore.details}
    </CardText>
    <CardActions style={{ textAlign: 'right' }}>
      <Button
        raised
        primary
        iconChildren="check"
        iconBefore={false}
        onClick={() => { onComplete(chore.id); }}
      >
        Do It
      </Button>
    </CardActions>
  </Card>
);

UpcomingChoreComponent.propTypes = {
  chore: PropTypes.instanceOf(models.UpcomingChore).isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default UpcomingChoreComponent;
