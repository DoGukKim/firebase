import React from 'react';
import Layout from 'components/Layout/index';
import IndexContainer from 'containers/Index';

const IndexPage = ({ userObj }: any) => {
  return (
    <Layout title="트위터">
      <IndexContainer userObj={userObj} />
    </Layout>
  );
};

export default IndexPage;
