import React from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

import { Wrap, InputBtn } from './Profile.styled';

type Props = {};

const ProfileContainer: React.FC<Props> = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    firebase.auth().signOut();
    history.push('/');
  };
  return (
    <Wrap>
      <InputBtn onClick={onLogOutClick}>Log out</InputBtn>
    </Wrap>
  );
};

export default ProfileContainer;
