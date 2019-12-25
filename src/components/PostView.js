import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { WIDTH } from '../config/width';
import mockData from '../mock-data/posts';

function PostView({ className, match, data }) {
  console.log("TCL: PostView -> data", data)
  let realData;
  if(data.length) {
    realData = data;
  } else {
    realData = mockData;
  }
  
  const { postId } = match.params;
  const post = realData.filter(el => el.id === Number(postId))[0];
  const { title, date, body } = post;

  return (
    <>
      <Nav />
      <div className={className}>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>
        {body}
      </p>
      </div>
    </>
  );
}

const StyledPostView = styled(PostView)`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: ${WIDTH.MAIN_CONTAINER};

  /* background-color: pink */

  h1 {
    font-weight: bold;
    font-size: 4rem;
    margin-top: 50px;
    padding: 10px;
    line-height: 1.2;
    color: #363636;
  }

  p {
    line-height: 1.8;
    font-size: 1.3rem;
    padding: 10px;
    color: #363636;
  }
`;

export default StyledPostView;
