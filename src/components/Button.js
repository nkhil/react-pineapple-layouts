import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { IconContext } from "react-icons";
import { withRouter } from 'react-router-dom'

function Button({ history, className, text, link }) {

  const handleClick = () => {
    console.log('CLICKED');
    history.push('/create');
  }
  return (
    <IconContext.Provider value={{ size: '1.5em' }}>
      <button className={className} onClick={handleClick}>
        Create  <MdAdd />
      </button>
    </IconContext.Provider>
  );
}

const StyledButton = styled(Button)`
  background-color: #1C87D6;
  padding: 10px;
  margin: 1em;
  padding: 0.5em 2em;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-right: 0;
  margin-top: 40px;
`;

export default withRouter(StyledButton);
