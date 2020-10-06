import React from 'react';
import { firestore } from 'firebase';
type Props = {
  tweetObj?: any;
  isOwner?: any;
};

const TweetComponent: React.FC<Props> = ({ tweetObj, isOwner }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm(`Are you sure u want to del it?`);
    if (ok) {
      await firestore().doc(`tweets/${tweetObj.id}`).delete();
    }
  };
  return (
    <>
      <div key={tweetObj.id}>{tweetObj.text}</div>
      {isOwner && (
        <>
          <button onClick={onDeleteClick}>Delete</button>
          <button>Edit</button>
        </>
      )}
    </>
  );
};

export default TweetComponent;
