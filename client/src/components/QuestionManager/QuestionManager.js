import React, { useEffect, useState } from 'react';
import { Container, Table } from 'semantic-ui-react';
import allQuestionsService from '../../services/allQuestionsService';
import QuestionRow from './QuestionRow';

const QuestionManager = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(async () => {
    var questionsData = await allQuestionsService.getAllQuestions();
    questionsData.data.map((question) => {
      setQuestions((prevState) => [...prevState, question]);
    });
  }, []);

  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Number Of Answers</Table.HeaderCell>
          <Table.HeaderCell>Last Updated</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {questions.map((question) => {
          return (
            <QuestionRow
              id={question.id}
              title={question.title}
              numOfAnswers={question.answers.length}
              lastUpdated={question.lastUpdated}
            />
          );
        })}
        {console.log(questions)}
      </Table.Body>
    </Table>
  );
};

export default QuestionManager