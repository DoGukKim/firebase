import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Wrap, Form, Input } from './Index.styled';
import { firestore } from 'firebase';
import TweetComponent from 'components/Tweet';

type Props = {
  userObj?: any;
};

const IndexContainer: React.FC<Props> = ({ userObj }) => {
  const [tweet, setTweet] = useState<string>('');
  const [tweets, setTweets] = useState<any>([]);

  /* useing forEach Not Real time */
  // const getTweets = async () => {
  //   const dbTweets = await firestore().collection('tweets').get();
  //   dbTweets.forEach((document) => {
  //     const tweetObject = {
  //       ...document.data(),
  //       id: document.id,
  //     };
  //     setTweets((prev: any) => [tweetObject, ...prev]);
  //   });
  // };

  useEffect(() => {
    // getTweets();
    /* useing firebase snapshot for real time */
    firestore()
      .collection('tweets')
      .onSnapshot((snapshot) => {
        const tweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTweets(tweetArray);
      });
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
          <TweetComponent
            key={tweet.id}
            tweetObj={tweet}
            isOwner={tweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </Wrap>
  );
};

export default IndexContainer;
