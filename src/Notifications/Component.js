import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { Snackbar } from 'react-md';

const Component = ({
  notifications,
  clear,
}) => (
  <Snackbar
    toasts={notifications.toJS()}
    onDismiss={clear}
    autohide
    autohideTimeout={1200}
  />
);

Component.propTypes = {
  notifications: PropTypes.instanceOf(List).isRequired,
  clear: PropTypes.func.isRequired,
};

export default Component;
