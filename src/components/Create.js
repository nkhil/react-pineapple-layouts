import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Helmet } from 'react-helmet'

import Nav from './Nav';
import styles from '../constants/styles';
import blockTypes from '../constants/blockTypeButtons';

function InlineStyleButton({data, onMouseDown}) {
  const { style, value } = data; 
  return (
    <input 
      type='button'
      key={style}
      value={value}
      data-style={style}
      onMouseDown={(e) => onMouseDown(e)}
    />
  )
}

function BlockStyleButtons({ data, onMouseDown }) {
  const { value, block } = data;
  return (
    <input
      type="button"
      key={block}
      value={value}
      data-block={block}
      onMouseDown={e => onMouseDown(e)}
    />
  )
}

function DraftEditor({ className }) {

  const TITLE = 'Pineapple - Create';

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleChange = (text) => setEditorState(text);

  const toggleInlineStyle = (e) => {
    e.preventDefault();
    let style = e.currentTarget.getAttribute('data-style');
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }

  const toggleBlockType = (e) => {
    e.preventDefault();
    let block = e.currentTarget.getAttribute('data-block');
    console.log("TCL: toggleBlockType -> block", block)
    setEditorState(RichUtils.toggleBlockType(editorState, block))
  }

  const handleKeyCommand = (command) => {
    let newEditorState = RichUtils.handleKeyCommand(editorState, command);

    if (!newEditorState && command === 'strikethrough') {
      newEditorState = RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH');
    }

    if (newEditorState) {
      setEditorState(newEditorState);
      return 'handled';
    }
    return 'not-handled';
  }

  const keyBindingFunction = (e) => {
    if (KeyBindingUtil.hasCommandModifier(e) && e.shiftKey && e.key === 'x') {
      return 'strikethrough';
    }
    return getDefaultKeyBinding(e);
  }

  return (
    <>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <Nav />
      <div className={className}>
        <div style={{ margin: '10px'}}>
          {styles.map(style => (
            <InlineStyleButton 
              data={style} 
              onMouseDown={toggleInlineStyle} 
              key={style.style}
            />
          ))}
        </div>
        <div style={{ margin: '10px'}}>
          {blockTypes.map(block => (
            <BlockStyleButtons
            data={block}
            onMouseDown={toggleBlockType}
            key={block.block}
            />
          ))}
        </div>
        <div className='draft-editor-wrapper'>
          <input 
            type="text" 
            name="title"
            className="title-input"
            placeholder="Title (optional)"
          />
          <Editor 
            editorState={editorState}
            onChange={handleChange}
            handleKeyCommand={handleKeyCommand}
            keyBindingFn={keyBindingFunction}
            placeholder={'Start typing...'}
          />
        </div>
      </div>
    </>
  )
}

const StyledDraftEditor = styled(DraftEditor)`
  width: 700px;
  margin: 50px auto;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 1.5;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.6;
  }

  h3 {
    font-size: 1.6;
    font-weight: bold;
    line-height: 1.7;
  }
  
  .draft-editor-wrapper {
    /* border: 1px solid #ccc; */

    .title-input {
      border: none;
      font-size: 3rem;
      padding: 10px;
      padding-left: 0;
      outline-width: 0;
      font-weight: bold;
      overflow: hidden;
      height: 100px;
      color: #ccc;
    }
  }
  /* .public-DraftEditor-content is from the Draft module directly */
  .public-DraftEditor-content {
    min-height: 500px;
    overflow: auto;
    font-size: 1.5rem;
    line-height: 1.8;
  }

  .public-DraftEditorPlaceholder-inner {
    position: absolute;
    width: 100px;
    color: #ccc;
    pointer-events: none;
  }
`;

export default StyledDraftEditor;