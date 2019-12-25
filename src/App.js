import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from './resets/GlobalStyles';

import Home from './components/Home';
import StyledLogin from './components/Login';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={StyledLogin} />
        </>
      </Router>
    </>
  );
}

export default App;
