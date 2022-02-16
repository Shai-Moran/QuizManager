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
  const [answers, setAnswers] = useState([]);

  return (
    <Container>
      <h1>New Question</h1>
      <NewQuestionForm
        setQuestionType={setQuestionType}
        setLenguage={setLenguage}
        setPoints={setPoints}
        setTitle={setTitle}
        setContent={setContent}
        setAnswers={setAnswers}
        answers={answers}
      />
    </Container>
  );
};

export default NewQuestion