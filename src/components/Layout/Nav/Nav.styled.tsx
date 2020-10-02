import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Header = styled.header`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  max-width: 375px;
  width: 100%;
  background: #fff;
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const NavItem = styled.li``;
export const NavLink = styled(Link)``;
