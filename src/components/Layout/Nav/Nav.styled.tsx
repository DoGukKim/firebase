import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  background: #fff;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavItem = styled.li``;
export const NavLink = styled(Link)``;