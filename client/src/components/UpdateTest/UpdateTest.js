import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';
import { EditorState, ContentState } from 'draft-js';
import getTestById from '../../services/getTestById';
import { v4 as uuidv4 } from 'uuid';
import QuestionSelector from '../NewTest/QuestionSelector/QuestionSelector';
import newTestService from '../../services/newTestService';
import UpdateEmailForm from './UpdateEmail/UpdateEmailForm';
import UpdateTestForm from './UpdateTestForm.js/UpdateTestForm';

const UpdateTest = () => {
  const navigation = useNavigate();
  const [field, setField] = useState('');
  const [language, setLenguage] = useState('');
  const [passingGrade, setPassingGrade] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [header, setHeader] = useState(() => EditorState.createEmpty());
  const [successMsg, setSuccessMsg] = useState(() => EditorState.createEmpty());
  const [failMsg, setFailMsg] = useState(() => EditorState.createEmpty());
  const [questions, setQuestions] = useState([]);

  const [subject, setSubject] = useState('');
  const [passingEditor, setPassingEditor] = useState(() =>
    EditorState.createEmpty()
  );
  const [failingEditor, setFailingEditor] = useState(() =>
    EditorState.createEmpty()
  );

  const [fieldError, setFieldError] = useState(false);
  const [languageError, setLanguageError] = useState(false);
  const [passingGradeError, setPassingGradeError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);

  useEffect(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    const test = await getTestById.getTestById(idParam);
    let data = test.data[0];
    console.log(data);
    updateState(data);
  }, []);

  const updateState = (data) => {
    console.log(data.name);
    setField(data.field);
    setLenguage(data.language);
    setPassingGrade(data.passingGrade);
    setName(data.name);
    setEmail(data.createrEmail);
    // setHeader(data.opening);
    // setSuccessMsg(EditorState.createWithContent(data.passingText));
    // setFailMsg(EditorState.createWithContent(data.failText));
    // setSubject;
    // setPassingEditor;
    // setFailingEditor;
  };

  const newTestHandler = () => {
    const date = new Date();
    const id = uuidv4();

    if (field === '') {
      setFieldError(true);
    } else if (language === '') {
      setLanguageError(true);
    } else if (passingGrade > 100 || passingGrade < 0) {
      setPassingGradeError(true);
    } else if (name === '') {
      setNameError(true);
    } else if (email === '') {
      setEmailError(true);
    } else if (subject === '') {
      setSubjectError(true);
    } else {
      const newTest = {
        testId: id,
        field: field,
        name: name,
        lastUpdated: `${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`,
        language: language,
        opening: header,
        questions: questions,
        createrEmail: email,
        passingGrade: passingGrade,
        answerReview: false,
        testUrl: `http://localhost:3000/api/startTest?id=${id}`,
        certificateUtl: 'abc',
        passingText: successMsg,
        failText: failMsg,
        emailId: uuidv4(),
        subject: subject,
        successBody: passingEditor,
        failBody: failingEditor
      };

      newTestService.addTest(newTest);
      navigation('/test-added');
    }
  };

  return (
    <Container className="new-test-container">
      <Button
        onClick={() => {
          console.log(name);
        }}
      >
        click
      </Button>
      <h1>New Test</h1>
      <UpdateTestForm
        field={field}
        setField={setField}
        language={language}
        setLenguage={setLenguage}
        passingGrade={passingGrade}
        setPassingGrade={setPassingGrade}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        header={header}
        setHeader={setHeader}
        successMsg={successMsg}
        setSuccessMsg={setSuccessMsg}
        failMsg={failMsg}
        setFailMsg={setFailMsg}
        fieldError={fieldError}
        languageError={languageError}
        passingGradeError={passingGradeError}
        nameError={nameError}
        emailError={emailError}
      />
      <QuestionSelector questions={questions} setQuestions={setQuestions} />
      <UpdateEmailForm
        setSubject={setSubject}
        passingEditor={passingEditor}
        setPassingEditor={setPassingEditor}
        failingEditor={failingEditor}
        setFailingEditor={setFailingEditor}
        subjectError={subjectError}
      />
      <Container textAlign="right">
        <Button className="ui green button" onClick={newTestHandler}>
          Create New Test
        </Button>
      </Container>
    </Container>
  );
};

export default UpdateTest;
