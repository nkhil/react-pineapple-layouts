import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <p><Link to='/login'>Click here to login</Link></p>
      <p><Link to='/posts'>Click here to see all posts</Link></p>
    </>
  );
}

export default Home;
