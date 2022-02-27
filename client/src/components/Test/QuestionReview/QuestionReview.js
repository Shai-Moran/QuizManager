import React, { useEffect, useState } from 'react';
import { Container, Header, Radio, Segment } from 'semantic-ui-react';
import getQuestionById from '../../../services/getQuestionById';

const QuestionReview = (props) => {
  let count = 0;
  const [question, setQuestion] = useState({
    title: '',
    content: '',
    answers: []
  });
  useEffect(async () => {
    count = 0;
    const q = await getQuestionById.getQuestionById(props.question.id);
    setQuestion(q.data[0]);
  }, []);

  return (
    <Segment padded>
      <Container textAlign="left">
        <Header as="h1">{question.title}</Header>
        <Header as="h2">{question.content}</Header>
        {question.answers.map((a) => {
          count++;
          return (
            <Container>
              {question.answers[count - 1].isTrue ? (
                <Segment inverted color="green">
                  <Radio
                    label={a.content}
                    name={question.title}
                    value={count}
                    checked={props.answer === count}
                    onClick={(e, { value }) => console.log(value)}
                  />
                </Segment>
              ) : (
                <Segment inverted color="red">
                  <Radio
                    label={a.content}
                    name={question.title}
                    value={count}
                    checked={props.answer === count}
                    onClick={(e, { value }) => console.log(value)}
                  />
                </Segment>
              )}
            </Container>
          );
        })}
      </Container>
    </Segment>
  );
};

export default QuestionReview;
