import { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import getAllQuestions from '../../services/allQuestionsService';
import QuestionPagination from '../UpdateQuestion/QuestionPagination'
import QuestionRow from './QuestionRow';
import { useNavigate } from 'react-router-dom';

const QuestionManager = () => {
  const [questions, setQuestions] = useState([]);
  const [tags, setTags] = useState('');
  const navigation = useNavigate();

  useEffect(async () => {
   const allQuestions = await getAllQuestions.getAllQuestions()
   allQuestions.data.map((question) => {
     setQuestions((prevState) => [...prevState, question])
   })
   if (tags !== ''){
    const myTags = tags.split(", ")
     setQuestions([])
     allQuestions.data.map(question => {
       myTags.map(tag => {
         question.tags.map(t => {
           if(tag === t){
            setQuestions((prevState) => [...prevState, question])
           }
         })
       })
     })
   } 
  }, [tags])

  const onUpdateHandler = () => {
    navigation(`/new-question`);
  };
  
  return (
    <div>
      <h1>Question Manager</h1>
      search by tag: <input type='text' onChange={e => setTags(e.target.value)}/>
      <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Question Type</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Content</Table.HeaderCell>
          <Table.HeaderCell>Answers</Table.HeaderCell>
          <Table.HeaderCell>View Answers</Table.HeaderCell>
          <Table.HeaderCell>Tags</Table.HeaderCell>
          <Table.HeaderCell>Points</Table.HeaderCell>
          <Table.HeaderCell>Last Updated</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {questions.map((question) => {
          return (
            <QuestionRow
              id={question.id}
              questionType={question.questionType}
              title={question.title}
              content={question.content}
              answers={question.answers}
              viewAnswers={question.viewAnswers}
              tags={question.tags}
              points={question.points}
              lastUpdated={question.lastUpdated}
            />
          );
        })}
        <QuestionPagination></QuestionPagination>
        <Button color='green' onClick={onUpdateHandler}>Add Question</Button>
      </Table.Body>
    </Table>
    </div>
  );    
};
 
export default QuestionManager