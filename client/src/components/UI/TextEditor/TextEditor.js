import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const TextEditor = (props) => {
  return (
    <div>
      <Editor
        editorState={props.editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={props.setEditorState}
      />
    </div>
  );
};

// to show the content of the editor state we need to  convert the raw content
// to a new editor state and show it on a draftjs readonly editor like:
// import { Editor } from 'draftjs';

export default TextEditor;
