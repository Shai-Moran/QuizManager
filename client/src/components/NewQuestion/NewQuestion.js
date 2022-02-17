import React, { useState } from 'react';
import NewQuestionForm from './NewQuestionForm';
import { Container } from 'semantic-ui-react';
import { EditorState } from 'draft-js';

const NewQuestion = () => {
  const [questionType, setQuestionType] = useState('')
  const [language, setLenguage] = useState('');
  const [points, setPoints] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');

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
      />
    </Container>
  );
};

export default NewQuestion