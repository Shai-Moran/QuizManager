import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';
import { EditorState, convertFromRaw } from 'draft-js';
import getTestById from '../../services/getTestById';
import QuestionSelector from '../NewTest/QuestionSelector/QuestionSelector';
import { convertToRaw } from 'draft-js';
import UpdateTestForm from './UpdateTestForm.js/UpdateTestForm';
import updateTestService from '../../services/updateTestService';
import Urls from '../../environments/environment';

const UpdateTest = () => {
  const [data, setData] = useState({});

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

  const [fieldError, setFieldError] = useState(false);
  const [languageError, setLanguageError] = useState(false);
  const [passingGradeError, setPassingGradeError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    const test = await getTestById.getTestById(idParam);
    let data = test.data[0];
    setData(data);
    updateState(data);
  }, []);

  const convertion = (data, setEditorState) => {
    const contentState = convertFromRaw(JSON.parse(data));
    const editorState = EditorState.createWithContent(contentState);
    setEditorState(editorState);
  };

  const updateState = (testData, emailData) => {
    setField(testData.field);
    setLenguage(testData.language);
    setPassingGrade(testData.passingGrade);
    setName(testData.name);
    setEmail(testData.createrEmail);
    setQuestions(testData.questions);
    convertion(testData.opening, setHeader);
    convertion(testData.passingText, setSuccessMsg);
    convertion(testData.failText, setFailMsg);
  };

  const newTestHandler = () => {
    const date = new Date();
    const id = data.id;

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
        answerReview: false,
        testUrl: `${Urls.clientUrl}/start-test?id=${id}`,
        certificateUtl: 'abc',
        passingText: JSON.stringify(
          convertToRaw(successMsg.getCurrentContent())
        ),
        failText: JSON.stringify(convertToRaw(failMsg.getCurrentContent()))
      };

      try {
        updateTestService.updateTest(newTest);
        navigation('/tests-menu');
      } catch {
        console.log('New test Service failed');
      }
    }
  };

  return (
    <Container className="new-test-container">
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
      <Container textAlign="right">
        <Button className="ui green button" onClick={newTestHandler}>
          Create New Test
        </Button>
      </Container>
    </Container>
  );
};

export default UpdateTest;
