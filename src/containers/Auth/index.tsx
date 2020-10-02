import React, { ChangeEvent, FormEvent, useState } from 'react';
import firebase from 'firebase';

import {
  Auth,
  Form,
  InputBtn,
  SocialLoginBox,
  SocialLoginBtn,
} from './Auth.styled';
import Input from 'components/Input';

type Props = {};

const AuthContainer: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [newAccount, setNewAccount] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let data;
      console.log(data);
      if (newAccount) {
        // create account
        data = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
      } else {
        // log in
        data = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onSocialClick = async (e: any) => {
    const {
      target: { name },
    } = e;
    let provider: any;
    if (name === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new firebase.auth.GithubAuthProvider();
    }
    await firebase.auth().signInWithPopup(provider);
  };

  return (
    <Auth>
      <Form onSubmit={onSubmit}>
        <Input
          name="email"
          type="email"
          label="e-mail"
          variant="outlined"
          value={email}
          onChange={onChange}
          required
        />
        <Input
          name="password"
          type="password"
          label="password"
          variant="outlined"
          autoComplete="off"
          value={password}
          onChange={onChange}
          required
        />
        {error}
        <InputBtn type="submit">
          {newAccount ? 'Create Account' : 'Log In'}
        </InputBtn>
        <InputBtn onClick={toggleAccount}>
          {newAccount ? 'Sign In' : 'Create Account'}
        </InputBtn>
      </Form>
      <SocialLoginBox>
        <SocialLoginBtn onClick={onSocialClick} name="google">
          Continue With Google
        </SocialLoginBtn>
        <SocialLoginBtn onClick={onSocialClick} name="github">
          Continue With Github
        </SocialLoginBtn>
      </SocialLoginBox>
    </Auth>
  );
};

export default AuthContainer;
