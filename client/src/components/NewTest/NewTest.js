import React, { useState } from 'react';
import NewTestForm from './NewTestForm/NewTestForm';
import { Container } from 'semantic-ui-react';
import EmailForm from './EmailForm/EmailForm';
import { EditorState } from 'draft-js';

const NewTest = () => {
  const [language, setLenguage] = useState('');
  const [passingGrade, setPassingGrade] = useState(0);
  const [Name, setName] = useState('');
  const [header, setHeader] = useState(() => EditorState.createEmpty());
  const [successMsg, setSuccessMsg] = useState(() => EditorState.createEmpty());
  const [failMsg, setFailMsg] = useState(() => EditorState.createEmpty());

  const [passSubject, setPassSubject] = useState('');
  const [failSubject, setFailSubject] = useState('');
  const [passingEditor, setPassingEditor] = useState(() =>
    EditorState.createEmpty()
  );
  const [failingEditor, setFailingEditor] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <Container>
      <h1>New Test</h1>
      <NewTestForm
        setLenguage={setLenguage}
        setPassingGrade={setPassingGrade}
        setName={setName}
        header={header}
        setHeader={setHeader}
        successMsg={successMsg}
        setSuccessMsg={setSuccessMsg}
        failMsg={failMsg}
        setFailMsg={setFailMsg}
      />
      <EmailForm
        setPassSubject={setPassSubject}
        setFailSubject={setFailSubject}
        passingEditor={passingEditor}
        setPassingEditor={setPassingEditor}
        failingEditor={failingEditor}
        setFailingEditor={setFailingEditor}
      />
    </Container>
  );
};

export default NewTest;
