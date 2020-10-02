import React from 'react';
import { Navigation, NavItem, NavLink, NavList } from './Nav.styled';

type Props = {};

const NavComponent: React.FC<Props> = () => {
  return (
    <Navigation>
      <NavList>
        <NavItem>
          <NavLink to="/">Twitter</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">Profile</NavLink>
        </NavItem>
      </NavList>
    </Navigation>
  );
};

export default NavComponent;
