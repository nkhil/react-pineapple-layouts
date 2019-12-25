import React from 'react';
import styled from 'styled-components';

function Post({ className, data }) {

  const { title, date, body } = data;

  const formatBody = (body) => body.split(' ').slice(0, 50).join(' ') + '...';

  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{formatBody(body)}</p>
    </div>
  )
}

const StyledPost = styled(Post)`
  background-color: #F1F9FF;
  border-radius: 5px;
  padding: 2.2rem;
  margin: 2rem 0;
  cursor: pointer;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #363636;
    line-height: 1.2;
  }

  p {
    font-size: 1.2rem;
    color: #363636;
    line-height: 1.6;
    margin-top: 1rem;
  }
`;

export default StyledPost;