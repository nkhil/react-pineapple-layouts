import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from './resets/GlobalStyles';

import Home from './components/Home';
import StyledLogin from './components/Login';
import AllPosts from './components/AllPosts';
import PostView from './components/PostView';

function App() {
  const [data, setData] = useState([]);
  console.log("TCL: App -> data", data)

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={StyledLogin} />
          <Route exact path='/posts' render={props => <AllPosts {...props} setData={setData} />} />
          <Route exact path='/posts/:postId' render={props => <PostView {...props} data={data} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
