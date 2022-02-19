import React, { useState } from 'react';
import NewQuestionForm from './NewQuestionForm';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import QuestionService from '../../services/questionService';

const NewQuestion = () => {
  const navigation = useNavigate();
  const [questionType, setQuestionType] = useState('')
  const [viewAnswers, setViewAnswers] = useState('')
  const [language, setLanguage] = useState('');
  const [points, setPoints] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [answer1, setAnswer1] = useState({content: '', isTrue: false});
  const [answer2, setAnswer2] = useState({content: '', isTrue: false});
  const [answer3, setAnswer3] = useState({content: '', isTrue: false});
  const [answer4, setAnswer4] = useState({content: '', isTrue: false});

  const [questionTypeError, setQuestionTypeError] = useState(false);
  const [languageError, setLanguageError] = useState(false);
  const [pointsError, setPointsError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [tagsError, setTagsError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [answer1Error, setAnswer1Error] = useState(false);
  const [answer2Error, setAnswer2Error] = useState(false);
  const [answer3Error, setAnswer3Error] = useState(false);
  const [answer4Error, setAnswer4Error] = useState(false);

  const newQuestionHandler = () => {
    const id = uuidv4();
    var answers = [answer1, answer2, answer3, answer4]
    console.log(questionType)
    const newQuestion = {
      id: id,
      title: title,
      content: content,
      answers: answers,
      questionType: questionType,
      viewAnswers: viewAnswers,
      tags: [],
      points: points,
    }
    QuestionService.addQuestion(newQuestion);
    navigation('/question-added');
  } 

  return (
    <Container>
      <h1>New Question</h1>
      <NewQuestionForm
        setQuestionType={setQuestionType}
        setLenguage={setLanguage}
        setPoints={setPoints}
        setTitle={setTitle}
        setTags={setTags}
        setContent={setContent}
        setAnswer1={setAnswer1}
        setAnswer2={setAnswer2}
        setAnswer3={setAnswer3}
        setAnswer4={setAnswer4}
        setViewAnswers={setViewAnswers}
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
        answer4={answer4}
        viewAnswers={viewAnswers}        
        questionTypeError={questionTypeError}
        languageError={languageError}
        pointsError={pointsError}
        titleError={titleError}
        tagsError={tagsError}
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