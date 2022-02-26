import React, { useState, useEffect } from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';
import Question from '../Question/Question';

const TestProcess = (props) => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let questionsArray = [];
    let count = 0;
    props.testData.questions.map((q) => {
      questionsArray.push({ index: count, id: q, answer: 0 });
      count++;
    });
    setQuestions(questionsArray);
  }, []);

  const shuffleQuestions = (questionsArray) => {
    let currentIndex = questionsArray.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [questionsArray[currentIndex], questionsArray[randomIndex]] = [
        questionsArray[randomIndex],
        questionsArray[currentIndex]
      ];
    }

    return questionsArray;
  };

  const finishTestHandler = () => {
    
  }
  return (
    <div>
      {questions.map((q) => {
        if (q.index === index) {
          return (
            <Container>
              <Question
                index={q.index}
                id={q.id}
                answer={q.answer}
                questions={questions}
                setQuestions={setQuestions}
              />
            </Container>
          );
        }
      })}
      <Container>
        {index === questions.length - 1 ? (
          <Container>
            <Button onClick={(finishTestHandler)} color="green">
              Finish Test
            </Button>
            <Button onClick={() => setIndex(index - 1)}>
              Previous Question<Icon name="angle right"></Icon>
            </Button>
          </Container>
        ) : index === 0 ? (
          <Container>
            <Button onClick={() => setIndex(index + 1)}>
              <Icon name="angle left"></Icon>
              Next Question
            </Button>
          </Container>
        ) : index !== 0 ? (
          <Container>
            <Button onClick={() => setIndex(index + 1)}>
              <Icon name="angle left"></Icon>
              Next Question
            </Button>
            <Button onClick={() => setIndex(index - 1)}>
              Previous Question<Icon name="angle right"></Icon>
            </Button>
          </Container>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default TestProcess;
