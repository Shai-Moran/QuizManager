import React, { useState, useEffect } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

const TestReview = (props) => {
  const [text, setText] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    console.log(props.testInstence);
    if (true) {
      const contentState = convertFromRaw(
        JSON.parse(props.testData.passingText)
      );
      const editorState = EditorState.createWithContent(contentState);
      setText(editorState);
    } else {
      const contentState = convertFromRaw(JSON.parse(props.testData.failText));
      const editorState = EditorState.createWithContent(contentState);
      setText(editorState);
    }
  }, []);

  return (
    <Container>
      {console.log(props.testInstence)}
      {props.testData.answerRevive === false ? (
        <Container>
          <Header as="h1">Thank you for your answers</Header>
          <Header as="h2">Test Results will be emailed to you</Header>
        </Container>
      ) : (
        <Container>
          <Header as="h1">
            <Editor readonly={true} editorState={text} />
          </Header>
        </Container>
      )}
    </Container>
  );
};

export default TestReview;
