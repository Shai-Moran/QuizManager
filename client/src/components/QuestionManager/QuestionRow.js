import React from 'react';
import { Button, Container, Table } from 'semantic-ui-react';

const QuestionRow = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.title}</Table.Cell>
      <Table.Cell>{props.numOfAnswers}</Table.Cell>
      <Table.Cell>{props.lastUpdated}</Table.Cell>
      <Table.Cell>
        <Container>
          <Button>Update</Button>
          <Button>Copy Link</Button>
        </Container>
      </Table.Cell>
    </Table.Row>
  );
};

export default QuestionRow;
