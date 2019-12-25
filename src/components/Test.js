import React from 'react';

function Test({ match, data }) {
  const { postId } = match.params;
  const post = data.filter(el => el.id === Number(postId))[0];
  const { title, date, body } = post;
  return (
    <>
      <h1>Test component</h1>
      <h1>Title: {title}</h1>
      <p>Date: {date}</p>
      <p>{body}</p>
    </>
  );
}

export default Test;
