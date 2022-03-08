import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import getQuestionById from '../../services/getQuestionById';
import newQuestionService from '../../services/newQuestionService';
import UpdateQuestionForm from './UpdateQuestionForm';

const UpdateQuestion = () => {
    const navigation = useNavigate();
    const [questionType, setQuestionType] = useState('');
    const [viewAnswers, setViewAnswers] = useState('');
    const [points, setPoints] = useState(0);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [answer1, setAnswer1] = useState({ content: '', isTrue: false });
    const [answer2, setAnswer2] = useState({ content: '', isTrue: false });
    const [answer3, setAnswer3] = useState({ content: '', isTrue: false });
    const [answer4, setAnswer4] = useState({ content: '', isTrue: false });

    const [questionTypeError, setQuestionTypeError] = useState(false);
    const [pointsError, setPointsError] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const [tagsError, setTagsError] = useState(false);
    const [answer1Error, setAnswer1Error] = useState(false);
    const [answer2Error, setAnswer2Error] = useState(false);
    const [answer3Error, setAnswer3Error] = useState(false);
    const [answer4Error, setAnswer4Error] = useState(false);
    const [viewAnswersError, setViewAnswersError] = useState(false);

    useEffect(async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const question = await getQuestionById.getQuestionById(id);
        let data = question.data[0];
        updateState(data);
      }, []);

      const updateState = (data) => {
          setQuestionType(data.questionType)
          setViewAnswers(data.viewAnswers)
          setPoints(data.points)
          setTitle(data.title)
          setContent(data.content)
          setTags(data.tags)
          setAnswer1(data.answer1)
          setAnswer2(data.answer2)
          setAnswer3(data.answer3)
          setAnswer4(data.answer4)
      };

  const newQuestionHandler = () => {
    const date = new Date();
    const id = uuidv4();
    var answers = [answer1, answer2, answer3, answer4];
    const myTags = typeof tags === 'string' ? tags.split(', '): "";

    if (questionType === '') {
        setQuestionTypeError(true);
      } else if (points > 10 || points < 0) {
        setPointsError(true);
      } else if (title === '') {
        setTitleError(true);
      } else if (tags === '') {
        setTagsError(true);
      } else if (answer1 === '') {
        setAnswer1Error(true);
      } else if (answer2 === '') {
        setAnswer2Error(true);
      } else if (answer3 === '') {
        setAnswer3Error(true);
      } else if (answer4 === '') {
        setAnswer4Error(true);
      } else if (viewAnswers === '') {
        setViewAnswersError(true);
      } else {
        const newQuestion = {
          id: id,
          questionType: questionType,
          title: title,
          content: content,
          answers: answers,
          viewAnswers: viewAnswers,
          tags: myTags,
          points: points,
          lastUpdated: `${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`,
        };
        try{
          newQuestionService.addQuestion(newQuestion);
          navigation('/question-added');
        }
        catch{
          console.log('New question Service failed');
        }
      }
    };

  return (
    <Container>
      <h1>New Question</h1>
      <UpdateQuestionForm
        setQuestionType={setQuestionType}
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
        points={points}
        questionType={questionType}
        content={content}
        tags={tags}
        title={title}
        viewAnswers={viewAnswers}
        questionTypeError={questionTypeError}
        pointsError={pointsError}
        titleError={titleError}
        tagsError={tagsError}
        answer1Error={answer1Error}
        answer2Error={answer2Error}
        answer3Error={answer3Error}
        answer4Error={answer4Error}
        viewAnswersError={viewAnswersError}
      />
      <Container textAlign="right">
        <Button className="ui green button" onClick={newQuestionHandler}>
          Create New Question
        </Button>
      </Container>
    </Container>
  );
};

export default UpdateQuestion;
