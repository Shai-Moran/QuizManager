import React, { useState, useEffect } from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import QuestionReview from '../QuestionReview/QuestionReview';

const TestReview = (props) => {
  const [text, setText] = useState(() => EditorState.createEmpty());
  const [pass, setPass] = useState(false);

  useEffect(() => {
    if (props.testInstance.grade >= props.testData.passingGrade) {
      const contentState = convertFromRaw(
        JSON.parse(props.testData.passingText)
      );
      const editorState = EditorState.createWithContent(contentState);
      setText(editorState);
      setPass(true);
    } else {
      const contentState = convertFromRaw(JSON.parse(props.testData.failText));
      const editorState = EditorState.createWithContent(contentState);
      setText(editorState);
    }
  }, []);

  return (
    <Container>
      {props.testData.answerReview === false ? (
        <Container>
          <Header as="h1">Thank you for your answers</Header>
          <Header as="h2">Test Results will be emailed to you</Header>
        </Container>
      ) : (
        <Container>
          <Header textAlign="left">
            Your Score:
            {pass ? (
              <Header color="green">{props.testInstance.grade}</Header>
            ) : (
              <Header colot="red">{props.testInstance.grade}</Header>
            )}
          </Header>
          <Header as="h1">
            <Editor readonly={true} editorState={text} />
          </Header>
          {props.testInstance.questions.map((q) => {
            return <QuestionReview question={q} answer={q.answer} />;
          })}
        </Container>
      )}
    </Container>
  );
};

export default TestReview;
