import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const Component = ({
  onClick,
  pathname,
}) => {
  if (pathname === '/chore' || pathname.startsWith('/chore/')) {
    return null;
  }

  return (
    <Button
      className="new-chore-button"
      floating
      onClick={onClick}
    >
    add
    </Button>
  );
};

Component.propTypes = {
  onClick: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Component;
