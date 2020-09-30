import React, { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
      {children}
    </HelmetProvider>
  );
};

export default Layout;
