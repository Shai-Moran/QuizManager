import React, { useState } from 'react';
import { Container, Header, Form } from 'semantic-ui-react';
import TextEditor from '../../UI/TextEditor/TextEditor';
import { EditorState } from 'draft-js';

const NewTestForm = () => {
  const [language, setLenguage] = useState('');
  const [Name, setName] = useState('');
  const [header, setheader] = useState(() => EditorState.createEmpty());
  const [successMsg, setSuccessMsg] = useState(() => EditorState.createEmpty());
  const [failMsg, setFailMsg] = useState(() => EditorState.createEmpty());

  const languageOptions = [
    { key: 'hebrew', value: 'hebrew', text: 'Hebrew' },
    { key: 'english', value: 'english', text: 'English' }
  ];

  return (
    <Form>
      <Header textAlign="left">
        Language:
        <Form.Select
          selection
          placeholder="Select a Language"
          options={languageOptions}
          onChange={(e) => setLenguage(e.target.innerText)}
        />
      </Header>
      <Header textAlign="left">
        Test Name:
        <Form.Input
          fluid
          placeholder="Test Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Passing Grade:
        <Form.Input
          fluid
          type="Number"
          onChange={(e) => setName(e.target.value)}
        />
      </Header>
      <div className="wysiwyg-input">
        <Header textAlign="left" as="h2">
          Header
        </Header>
        <TextEditor editorState={header} setEditorState={setheader} />
      </div>
      <div className="wysiwyg-input">
        <Header textAlign="left" as="h2">
          Message to show on success:
        </Header>
        <TextEditor editorState={successMsg} setEditorState={setSuccessMsg} />
      </div>
      <div className="wysiwyg-input">
        <Header textAlign="left" as="h2">
          Message to show on failure:
        </Header>
        <TextEditor editorState={failMsg} setEditorState={setFailMsg} />
      </div>
    </Form>
  );
};

export default NewTestForm;
