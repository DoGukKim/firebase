import React from 'react';
import Layout from 'components/Layout/index';
import ProfileContainer from 'containers/Profile';
import styled from 'styled-components';

const IndexPage = () => {
  return (
    <Layout title="트위터 - 프로필">
      <ProfileContainer />
    </Layout>
  );
};

export default IndexPage;
