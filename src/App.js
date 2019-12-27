import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from './resets/GlobalStyles';

import Home from './components/Home';
import StyledLogin from './components/Login';
import AllPosts from './components/AllPosts';
import PostView from './components/PostView';
import Create from './components/Create';
import mockData from './mock-data/posts';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const posts = await mockData;
      setData(posts);
    }
    getPosts();
  }, [data]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={StyledLogin} />
          <Route exact path='/posts' render={props => <AllPosts {...props} data={data} />} />
          <Route exact path='/posts/:postId' render={props => <PostView {...props} data={data} />} />
          <Route exact path='/create' component={Create} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
