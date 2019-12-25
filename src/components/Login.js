import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import styled from 'styled-components';
import StyledLogo from './Logo';

function Login({ className }) {

  const TITLE = `Pineapple - Log In`
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('EMAIL', email);
    console.log('PASSWORD', password);
    console.log('LOGIN SUCCESSFUL');
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className={className}>
        <div className='box'>
        <StyledLogo width='150px' />
          <h1>Log in</h1>
          <form onSubmit={handleLogin}>
            
            <input 
              name="email" 
              type="text" 
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)} 
            />
            <input 
              name="password" 
              type="password" 
              placeholder="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
            <a href='https://googlg.com'>Forgot your username or password?</a>
            <a className='sign-up' href='https://googlg.com'><span>Sign up</span></a>

          </form>
        </div>
      </div>
    </>
  );
}

const StyledLogin = styled(Login)`
  background-color: #4EAFF4;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  min-height:100vh;

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 30px;
  }

  .box {
    background-color: #fff !important;
    width: 300px;
    text-align: center;
    background-color: #eee;
    border-radius: 5px;
    padding: 20px;

    form {
      display: flex;
      flex-direction: column;
      padding: 20px 20px 0px 20px;

      a {
        color: #1C87D6;
        text-decoration: none;
        margin-top: 10px;

        &:hover {
          text-decoration: underline;
        }
      }

      .sign-up {
        font-size: 1.2rem;
        margin-top: 50px;
        color: #171717;
        text-decoration: none;

        &:hover {
          text-decoration: none;
        }

        span {
          border-bottom: 2px solid #1C87D6;
          padding-bottom: 3px;
          font-weight: light;

          &:hover {
            border-bottom: 0;
          }
        }
      }

      input {
        border: 0;
        transition: background-color .3s;
        width: 100%;
        margin-top: 15px;
        background-color: #ECECEC;
        border-radius: 0.25rem;
        padding: 10px;
        color: #3A3F44;
        font-size: 1.5rem;
        font-weight: light;
        box-sizing:border-box;
      }

      button {
        background-color: #1C87D6;
        border-radius: 5px;
        color: #fff;
        font-weight: bold;
        font-size: 2rem;
        width: 100%;
        margin-top: 15px;
        padding: 5px 10px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default StyledLogin;
