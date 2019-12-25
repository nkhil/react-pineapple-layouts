import styled from 'styled-components';
import { WIDTH } from '../config/width';

const Flex = styled.div`
  
  /* background-color: pink;
  border: 2px solid red;
   */
  min-width: 100%;
  max-width: ${props => {
    if(props.width) return WIDTH.MAIN_CONTAINER
  }};

  /* margin: auto; */
  
  display: flex;

  flex-wrap: ${props => {
    if (props.wrapReverse) return 'wrap-reverse';
    if (props.noWrap) return 'nowrap';
    return 'wrap';
  }};

  justify-content: ${props => {
    if (props.justifyContent) return props.justifyContent;
    if (props.justifyCenter) return 'center';
    if (props.justifyAround) return 'space-around';
    if (props.justifyBetween) return 'space-between';
    if (props.justifyEnd) return 'flex-end';
    return 'flex-start';
  }};

  align-items: ${props => {
    if (props.alignItems) return props.alignItems;
    if (props.alignStretch) return 'stretch';
    if (props.alignEnd) return 'flex-end';
    if (props.alignCenter) return 'center';
    if (props.alignBaseline) return 'baseline';
    return 'flex-start';
  }};

  align-content: ${props => {
    if (props.alignContent) return props.content;
    if (props.contentStart) return 'flex-start';
    if (props.contentEnd) return 'flex-end';
    if (props.contentCenter) return 'center';
    if (props.contentBetween) return 'space-between';
    if (props.contentAround) return 'contentAround';
    return 'stretch';
  }};

  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

export default Flex;