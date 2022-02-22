import React, { useEffect, useState } from 'react';
import { Container, Table } from 'semantic-ui-react';
import questionsService from '../../services/questionService';
import QuestionRow from './QuestionRow';

const QuestionManager = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(async () => {
    var questionsData = await questionsService.getAllQuestions();
    questionsData.data.map((question) => {
      setQuestions((prevState) => [...prevState, question]);
    });
  }, []);

  return (
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
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {questions.map((question) => {
          return (
            <QuestionRow
              id={question.id}
              title={question.title}
              content={question.content}
              numOfAnswers={question.answers.length}
            />
          );
        })}
        {console.log(questions)}
      </Table.Body>
    </Table>
  );
};

export default QuestionManager