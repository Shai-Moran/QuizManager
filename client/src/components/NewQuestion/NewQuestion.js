import React, { useState } from 'react';
import NewQuestionForm from './NewQuestionForm';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import QuestionService from '../../services/questionService';

const NewQuestion = () => {
  const navigation = useNavigate();
  const [questionType, setQuestionType] = useState('')
  const [language, setLenguage] = useState('');
  const [points, setPoints] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [answer1, setAnswer1] = useState({content: '', isTrue: false});
  const [answer2, setAnswer2] = useState({content: '', isTrue: false});
  const [answer3, setAnswer3] = useState({content: '', isTrue: false});
  const [answer4, setAnswer4] = useState({content: '', isTrue: false});

  const [questionTypeError, setQuestionTypeError] = useState(false);
  const [languageError, setLanguageError] = useState(false);
  const [pointsError, setPointsError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [answer1Error, setAnswer1Error] = useState(false);
  const [answer2Error, setAnswer2Error] = useState(false);
  const [answer3Error, setAnswer3Error] = useState(false);
  const [answer4Error, setAnswer4Error] = useState(false);

  const newQuestionHandler = () => {
    const date = new Date();
    const id = uuidv4();
   
  if (questionType === '') {
    setQuestionTypeError(true);
  } else if (language === '') {
    setLanguageError(true);
  } else if (points > 100 || points < 0) {
    setPointsError(true);
  } else if (title === '') {
    setTitleError(true);
  } else if (content === '') {
    setContentError(true);
  } else if (answer1 === '') {
    setAnswer1Error(true);
  } else if (answer2 === '') {
    setAnswer2Error(true);
  } else if (answer3 === '') {
    setAnswer3Error(true);
  } else if (answer4 === '') {
    setAnswer4Error(true);
  } else {
    const newQuestion = {
      questionId: id,
      title: title,
      language: language,
      points: points,
      lastUpdated: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      questionUrl: `http://localhost:3000/api/questions?id=${id}`,
    }
    QuestionService.addQuestion(newQuestion);
    navigation('/question-added');
  } 
}
  return (
    <Container>
      <h1>New Question</h1>
      <NewQuestionForm
        setQuestionType={setQuestionType}
        setLenguage={setLenguage}
        setPoints={setPoints}
        setTitle={setTitle}
        setContent={setContent}
        setAnswer1={setAnswer1}
        setAnswer2={setAnswer2}
        setAnswer3={setAnswer3}
        setAnswer4={setAnswer4}
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
        answer4={answer4}
        questionTypeError={questionTypeError}
        languageError={languageError}
        pointsError={pointsError}
        titleError={titleError}
        contentError={contentError}
        answer1Error={answer1Error}
        answer2Error={answer2Error}
        answer3Error={answer3Error}
        answer4Error={answer4Error}
      />
      <Container textAlign="right">
        <Button className="ui green button" onClick={newQuestionHandler}>
          Add New Question
        </Button>
      </Container>
    </Container>
  );
};

export default NewQuestion