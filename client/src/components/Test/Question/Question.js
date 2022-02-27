import React, { useState, useEffect } from 'react';
import { Container, Header, Radio } from 'semantic-ui-react';
import getQuestionById from '../../../services/getQuestionById';

const Question = (props) => {
  const [question, setQuestion] = useState({});
  const [selected, setSelected] = useState({});
  let count = 0;

  useEffect(async () => {
    const newQuestion = await getQuestionById.getQuestionById(props.id);
    let q = newQuestion.data[0];
    setQuestion(q);
    setSelected(props.answer);
  }, []);

  const handleChange = (e, { value }) => {
    setSelected(value);
    let items = [...props.questions];
    let item = { ...items[props.index], answer: value };
    items[props.index] = item;
    props.setQuestions(items);
  };
  return (
    <Container>
      <Header as="h1">{question.title}</Header>
      <Header as="h3">{question.content}</Header>
      <Container>
        {question.answers !== undefined ? (
          question.answers.map((answer) => {
            count = count + 1;
            return (
              <Container textAlign="left">
                <Radio
                  label={answer.content}
                  name="radioGroup"
                  value={count}
                  checked={selected === count}
                  onChange={handleChange}
                />
              </Container>
            );
          })
        ) : (
          <></>
        )}
      </Container>
    </Container>
  );
};

export default Question;
