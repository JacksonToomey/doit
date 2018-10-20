import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, FontIcon } from 'react-md';
import models from 'common/models';

const ChoreItemComponent = ({
  chore,
  onDeleteClick,
}) => (
  <ListItem
    primaryText={chore.name}
    rightIcon={(<FontIcon onClick={() => { onDeleteClick(chore); }}>delete</FontIcon>)}
  />
);

ChoreItemComponent.propTypes = {
  chore: PropTypes.instanceOf(models.Chore).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ChoreItemComponent;
