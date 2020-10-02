import React from 'react';
import { Header, Navigation, NavItem, NavLink, NavList } from './Nav.styled';

type Props = {};

const NavComponent: React.FC<Props> = () => {
  return (
    <Header>
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
    </Header>
  );
};

export default NavComponent;
