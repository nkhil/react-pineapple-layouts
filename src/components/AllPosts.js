import React from 'react';
import { Helmet } from 'react-helmet'
import { WIDTH } from '../config/width';

import StyledNav from './Nav';
import styled from 'styled-components';
import StyledButton from './Button';
import data from '../mock-data/posts';
import Post from './Post';

function AllPosts({ className }) {
  const TITLE = 'Pineapple';

  return (
    <div className={className}>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <StyledNav />
      <div className='main-container'>
        <div className='create-button'>
          <StyledButton 
            text={`Create`}
            link='/'
            external={false}
          />
          </div>
          {data.map(post => (
            <Post data={post} />
          ))}
      </div>
    </div>
  )
}

const StyledAllPosts = styled(AllPosts)`
  .main-container {
    
    max-width: ${WIDTH.MAIN_CONTAINER};
    margin: auto;
    display: flex;
    flex-direction: column;
    
    .create-button {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export default StyledAllPosts;
