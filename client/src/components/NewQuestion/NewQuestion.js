import React, { useState } from 'react';
import NewQuestionForm from './NewQuestionForm';
import { Container } from 'semantic-ui-react';
import { EditorState } from 'draft-js';

const NewQuestion = () => {
  const [language, setLenguage] = useState('');
  const [passingGrade, setPassingGrade] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [answers, setAnswers] = useState('');

  return (
    <Container>
      <h1>New Question</h1>
      <NewQuestionForm
        setLenguage={setLenguage}
        setPassingGrade={setPassingGrade}
        setTitle={setTitle}
        setContent={setContent}
        setAnswers={setAnswers}
      />
    </Container>
  );
};

export default NewQuestion