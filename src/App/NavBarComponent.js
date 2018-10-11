import React from 'react';
import PropTypes from 'prop-types';
import { url } from 'gravatar';
import { NavigationDrawer, Avatar, FontIcon } from 'react-md';
import models from 'user/models';

const NavBarComponent = ({
  navigate,
  children,
  title,
  user,
}) => (
  <NavigationDrawer
    toolbarTitle={title}
    toolbarActions={(<Avatar src={url(user.email)} />)}
    mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
    tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
    desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
    navItems={[
      {
        primaryText: 'Upcoming',
        leftIcon: <FontIcon>home</FontIcon>,
        onClick: () => { navigate('/'); },
      },
      {
        primaryText: 'Chores',
        leftIcon: <FontIcon>assignment</FontIcon>,
        onClick: () => { navigate('/chores'); },
      },
    ]}
  >
    {children}
  </NavigationDrawer>
);

NavBarComponent.propTypes = {
  user: PropTypes.instanceOf(models.User).isRequired,
  children: PropTypes.element.isRequired,
  navigate: PropTypes.func.isRequired,
  title: PropTypes.string,
};

NavBarComponent.defaultProps = {
  title: 'Do It',
};

export default NavBarComponent;
