import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Wrap, Form, Input } from './Index.styled';

type Props = {};

const IndexContainer: React.FC<Props> = () => {
  const [tweet, setTweet] = useState<string>('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setTweet(value);
  };

  return (
    <Wrap>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          placeholder="What`s on your mind?"
          value={tweet}
        />
        <Input type="submit" value="Tweet" />
      </Form>
    </Wrap>
  );
};

export default IndexContainer;
