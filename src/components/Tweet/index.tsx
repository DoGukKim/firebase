import React from 'react';

type Props = {
  tweetObj?: any;
  isOwner?: any;
};

const TweetComponent: React.FC<Props> = ({ tweetObj, isOwner }) => {
  return (
    <>
      <div key={tweetObj.id}>{tweetObj.text}</div>
      {isOwner && (
        <>
          <button>Delete</button>
          <button>Edit</button>
        </>
      )}
    </>
  );
};

export default TweetComponent;
