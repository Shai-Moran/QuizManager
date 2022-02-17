import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import TextEditor from '../../UI/TextEditor/TextEditor';
import { EditorState, ContentState } from 'draft-js';
import convertFromHTML from 'html-to-draftjs';
import emailTamplate from './emailTamplate';

const EmailForm = (props) => {
  function useTamplate(e) {
    const blocksFromHTML = convertFromHTML(emailTamplate);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

    if (e.target.id === 'passTamplate') {
      props.setPassingEditor(EditorState.createWithContent(state));
    } else {
      props.setFailingEditor(EditorState.createWithContent(state));
    }
  }

  return (
    <Form>
      <Header as="h1">Email Form</Header>
      <div>
        <Header textAlign="left" as="h2">
          Subject:
          <Form.Input
            error={props.subjectError}
            fluid
            placeholder="Enter Subject"
            onChange={(e) => props.setSubject(e.target.value)}
          />
        </Header>
        <Header textAlign="left" as="h3">
          Passing Email:
        </Header>
        <TextEditor
          editorState={props.passingEditor}
          setEditorState={props.setPassingEditor}
        />
        <Button id="passTamplate" onClick={useTamplate}>
          Use Tamplate
        </Button>
      </div>

      <div>
        <Header textAlign="left" as="h2">
          Failing Email:
        </Header>
        <TextEditor
          editorState={props.failingEditor}
          setEditorState={props.setFailingEditor}
        />
        <Button id="failTamplate" onClick={useTamplate}>
          Use Tamplate
        </Button>
      </div>
    </Form>
  );
};

export default EmailForm;
