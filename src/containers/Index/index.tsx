import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Wrap, Form, Input } from './Index.styled';
import { firestore } from 'firebase';

type Props = {
  userObj?: any;
};

const IndexContainer: React.FC<Props> = ({ userObj }) => {
  const [tweet, setTweet] = useState<string>('');
  const [tweets, setTweets] = useState<any>([]);
  const getTweets = async () => {
    const dbTweets = await firestore().collection('tweets').get();
    dbTweets.forEach((document) => {
      const tweetObject = {
        ...document.data(),
        id: document.id,
      };
      setTweets((prev: any) => [tweetObject, ...prev]);
    });
  };

  useEffect(() => {
    getTweets();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await firestore().collection('tweets').add({
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setTweet('');
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
          maxLength={120}
          value={tweet}
        />
        <Input type="submit" value="Tweet" />
      </Form>
      <div>
        {tweets.map((tweet: any) => (
          <div key={tweet.id}>{tweet.tweet}</div>
        ))}
      </div>
    </Wrap>
  );
};

export default IndexContainer;
