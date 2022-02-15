import React from 'react';
import NewTestForm from './NewTestForm/NewTestForm';
import { Container } from 'semantic-ui-react';

const NewTest = () => {
  return (
    <Container>
      <h1>New Test</h1>
      <NewTestForm />
    </Container>
  );
};

export default NewTest;
