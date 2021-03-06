import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewTestForm from './NewTestForm/NewTestForm';
import { Button, Container } from 'semantic-ui-react';
import EmailForm from './EmailForm/EmailForm';
import { EditorState, convertToRaw } from 'draft-js';
import newTestService from '../../services/newTestService';
import { v4 as uuidv4 } from 'uuid';
import QuestionSelector from './QuestionSelector/QuestionSelector';
import Urls from '../../environments/environment';

const NewTest = () => {
  const navigation = useNavigate();
  const [field, setField] = useState('');
  const [answerReview, setAnswerReview] = useState(false);
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

  const newTestHandler = () => {
    const date = new Date();
    const id = uuidv4();
    console.log(passingGrade);
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
        opening: JSON.stringify(convertToRaw(header.getCurrentContent())),
        questions: questions,
        createrEmail: email,
        passingGrade: passingGrade,
        answerReview: answerReview,
        testUrl: `${Urls.clientUrl}/start-test?id=${id}`,
        certificateUtl: 'abc',
        passingText: JSON.stringify(
          convertToRaw(successMsg.getCurrentContent())
        ),
        failText: JSON.stringify(convertToRaw(failMsg.getCurrentContent())),
        emailId: uuidv4(),
        subject: subject,
        successBody: JSON.stringify(
          convertToRaw(passingEditor.getCurrentContent())
        ),
        failBody: JSON.stringify(
          convertToRaw(failingEditor.getCurrentContent())
        )
      };

      try {
        newTestService.addTest(newTest);
        navigation('/tests-menu');
      } catch {
        console.log('New test Service failed');
      }
    }
  };

  const questionsChanges = (id) => {};

  return (
    <Container className="new-test-container">
      <h1>New Test</h1>
      <NewTestForm
        setField={setField}
        answerReview={answerReview}
        setAnswerReview={setAnswerReview}
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
        fieldError={fieldError}
        languageError={languageError}
        passingGradeError={passingGradeError}
        nameError={nameError}
        emailError={emailError}
      />
      <QuestionSelector
        questions={questions}
        setQuestions={setQuestions}
        questionsChanges={questionsChanges}
      />
      <EmailForm
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

export default NewTest;
