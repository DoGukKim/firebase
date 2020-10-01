import React, { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Body>
        <Wrapper>{children}</Wrapper>
      </Body>
    </HelmetProvider>
  );
};

export default Layout;

const Body = styled.div`
  display: flex;
  min-height: calc(100vh);
  background-color: #fff;
`;

const Wrapper = styled.div`
  max-width: 375px;
  width: 100%;
  margin: 0 auto;
  background-color: #1da1f2;
`;
