import React, { ChangeEvent, FormEvent, useState } from 'react';
import { firestore } from 'firebase';
type Props = {
  tweetObj?: any;
  isOwner?: any;
};

const TweetComponent: React.FC<Props> = ({ tweetObj, isOwner }) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [newTweet, setNewTweet] = useState<string>(tweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm(`Are you sure u want to del it?`);
    if (ok) {
      await firestore().doc(`tweets/${tweetObj.id}`).delete();
    }
  };
  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await firestore().doc(`tweets/${tweetObj.id}`).update({
      text: newTweet,
    });
    setEditing(false);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setNewTweet(value);
  };
  return (
    <>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} value={newTweet} />
            <input type="submit" value="Update Tweet" />
          </form>
          <button onClick={toggleEditing}>cancle</button>
        </>
      ) : (
        <>
          <div key={tweetObj.id}>{tweetObj.text}</div>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete</button>
              <button onClick={toggleEditing}>Edit</button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default TweetComponent;
