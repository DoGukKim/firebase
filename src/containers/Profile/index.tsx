import React from 'react';
import { Wrap, InputBtn } from './Profile.styled';

type Props = {};

const ProfileContainer: React.FC<Props> = () => {
  return (
    <Wrap>
      <InputBtn>Log out</InputBtn>
    </Wrap>
  );
};

export default ProfileContainer;
