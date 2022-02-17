import React, { useState } from 'react';
import NewTestForm from './NewTestForm/NewTestForm';
import { Button, Container } from 'semantic-ui-react';
import EmailForm from './EmailForm/EmailForm';
import { EditorState } from 'draft-js';
import newTestService from '../../services/newTestService';
import { v4 as uuidv4 } from 'uuid';

const NewTest = () => {
  const [field, setField] = useState('');
  const [language, setLenguage] = useState('');
  const [passingGrade, setPassingGrade] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [header, setHeader] = useState(() => EditorState.createEmpty());
  const [successMsg, setSuccessMsg] = useState(() => EditorState.createEmpty());
  const [failMsg, setFailMsg] = useState(() => EditorState.createEmpty());

  const [subject, setSubject] = useState('');
  const [passingEditor, setPassingEditor] = useState(() =>
    EditorState.createEmpty()
  );
  const [failingEditor, setFailingEditor] = useState(() =>
    EditorState.createEmpty()
  );

  const newTestHandler = () => {
    const date = new Date();

    const newTest = {
      testId: uuidv4(),
      field: field,
      name: name,
      lastUpdated: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
      language: language,
      opening: header,
      questions: [],
      createrEmail: email,
      passingGrade: passingGrade,
      answerReview: false,
      certificateUtl: 'abc',
      passingText: successMsg,
      failText: failMsg,
      emailId: uuidv4(),
      subject: subject,
      successBody: passingEditor,
      failBody: failingEditor
    };

    newTestService.addTest(newTest);
  };

  return (
    <Container className="new-test-container">
      <h1>New Test</h1>
      <NewTestForm
        setField={setField}
        setLenguage={setLenguage}
        setPassingGrade={setPassingGrade}
        setName={setName}
        setEmail={setEmail}
        header={header}
        setHeader={setHeader}
        successMsg={successMsg}
        setSuccessMsg={setSuccessMsg}
        failMsg={failMsg}
        setFailMsg={setFailMsg}
      />
      <EmailForm
        setSubject={setSubject}
        passingEditor={passingEditor}
        setPassingEditor={setPassingEditor}
        failingEditor={failingEditor}
        setFailingEditor={setFailingEditor}
      />
      <Container textAlign="right">
        <Button className="ui green button" onClick={newTestHandler}>
          Create New Test
        </Button>
      </Container>
    </Container>
  );
};

export default NewTest;
