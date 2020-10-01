import React from 'react';
import Layout from 'components/Layout/index';
import AuthContainer from 'containers/Auth';

const IndexPage = () => {
  return (
    <Layout title="트위터 - 로그인">
      <AuthContainer />
    </Layout>
  );
};

export default IndexPage;
