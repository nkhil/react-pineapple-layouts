import React from 'react';
import StyledLogo from './Logo';
import styled from 'styled-components';
import { WIDTH } from '../config/width';

function Nav({ className }) {
  return (
    <>
      <div className={className}>
        <div className='nav-container'>
          <StyledLogo width='50px'/>
          <p>Account</p>
        </div>
      </div>
    </>
  )
}

const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  border-bottom: 1px solid #E2E2E2;

  .nav-container {
    min-width: ${WIDTH.MAIN_CONTAINER};
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

export default StyledNav;
