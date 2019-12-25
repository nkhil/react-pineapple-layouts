import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

function Logo({ className, width }) {
  return (
    <img 
      src={logo} 
      className={className} 
      alt="pineapple"
    />
  )
}

const StyledLogo = styled(Logo)`
  height: auto;
  width: ${props => props.width}
`;

export default StyledLogo;
