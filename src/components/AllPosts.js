import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { WIDTH } from '../config/width';

import StyledNav from './Nav';
import styled from 'styled-components';
import StyledButton from './Button';
import data from '../mock-data/posts';
import Post from './Post';
import PostView from './PostView';

function AllPosts({ className, setData }) {
  const TITLE = 'Pineapple';

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    setPostData(data);
    setData(data);
  }, [postData, setData])

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
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <Post data={post} />
              </Link>
            </li>
          ))}
      </div>
    </div>
  )
}

const StyledAllPosts = styled(AllPosts)`

  a {
      text-decoration: none;
    }

  li {
    list-style-type: none;
  }
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
