import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Form, SubmitBtn } from './Auth.styled';
import Input from 'components/Input';

type Props = {};

const AuthContainer: React.FC<Props> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
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
          value={password}
          onChange={onChange}
          required
        />
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    </>
  );
};

export default AuthContainer;
