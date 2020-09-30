import React, { ReactNode } from 'react';
// import { Helmet } from 'react-helmet-async';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <>
      {/* <Helmet>
        <title>{title}</title>
      </Helmet> */}
      {children}
    </>
  );
};

export default Layout;
