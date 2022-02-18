import React from 'react';
import { Button, Container, Table } from 'semantic-ui-react';

const TestRow = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.name}</Table.Cell>
      <Table.Cell>{props.numOfQuestions}</Table.Cell>
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

export default TestRow;
