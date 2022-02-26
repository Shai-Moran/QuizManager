import React, { useEffect, useState } from 'react';
import { Button, Container, Icon } from 'semantic-ui-react';
import TestUserForm from './TestUserForm/TestUserForm';
import getTestById from '../../services/getTestById';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import TestProcess from './TestProcess/TestProcess';

const Test = () => {
  // stages work like that, 0: sigh up stage,
  // 1: start of the test, 2: test in progress,
  // 3: end of test and submition of answers
  const [testStage, setTestStage] = useState(0);
  const [userId, setUserId] = useState('');
  const [testData, setTestData] = useState({});
  const [opening, setOpening] = useState(() => EditorState.createEmpty());

  useEffect(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    const test = await getTestById.getTestById(idParam);
    let data = test.data[0];
    setTestData(data);
    const contentState = convertFromRaw(JSON.parse(data.opening));
    const editorState = EditorState.createWithContent(contentState);
    setOpening(editorState);
  }, []);

  return (
    <div>
      {testStage === 0 ? (
        <Container>
          <TestUserForm setTestStage={setTestStage} setUserId={setUserId} />
        </Container>
      ) : testStage === 1 ? (
        <Container>
          <Editor readonly={true} editorState={opening} />
          <Button icon labelPosition="right" onClick={() => setTestStage(2)}>
            Start Test<Icon name="flag checkered"></Icon>
          </Button>
        </Container>
      ) : testStage === 2 ? (
        <TestProcess testData={testData} setTestStage={setTestStage} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Test;
