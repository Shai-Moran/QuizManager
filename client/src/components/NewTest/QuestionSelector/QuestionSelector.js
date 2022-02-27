import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  Input,
  Table,
  Button,
  Segment
} from 'semantic-ui-react';
import getAllQuestions from '../../../services/allQuestionsService';
import QuestionSelectorRow from './QuestionSelectorRow';

const QuestionSelector = (props) => {
  const [questions, setQuestions] = useState([]);
  const [tags, setTags] = useState('');
  const [numSelected, setNumSelected] = useState(0);

  useEffect(async () => {
    const allQuestions = await getAllQuestions.getAllQuestions();
    allQuestions.data.map((question) => {
      setQuestions((prevState) => [...prevState, question]);
    });
    if (tags !== '') {
      const myTags = tags.split(', ');
      setQuestions([]);
      allQuestions.data.map((question) => {
        myTags.map((tag) => {
          question.tags.map((t) => {
            if (tag === t) {
              setQuestions((prevState) => [...prevState, question]);
            }
          });
        });
      });
    }
  }, [tags]);

  const viewQuestion = () => {};

  return (
    <div>
      <Segment>
        <Container textAlign="left">
          <Input
            type="text"
            onChange={(e) => setTags(e.target.value)}
            icon="search"
            placeholder="Search with tags..."
          />
          <Header>
            Questions Selected:<Header color="green">{numSelected}</Header>
          </Header>
        </Container>
        <Container>
          <Table color="green" celled selectable>
            <Table.Header>
              <Table.Row>
                <Header
                  as="h2"
                  content="Questions List"
                  subheader="Please select the questions you would like to add..."
                />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {questions.map((question) => {
                return (
                  <QuestionSelectorRow
                    tags={tags}
                    numSelected={numSelected}
                    setNumSelected={setNumSelected}
                    questions={props.questions}
                    setQuestions={props.setQuestions}
                    questionsChanges={props.questionsChanges}
                    id={question.id}
                    content={question.content}
                    answers={question.answers}
                    name={question.title}
                    tags={question.tags}
                  />
                );
              })}
            </Table.Body>
          </Table>
        </Container>
      </Segment>
    </div>
  );
};

export default QuestionSelector;
