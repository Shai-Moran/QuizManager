import React from 'react';
import { Button, Container, Table, Popup } from 'semantic-ui-react';

const TestRow = (props) => {
  const copyUrl = () => {
    navigator.clipboard.writeText(props.testUrl);
  };

  return (
    <Table.Row>
      <Table.Cell>{props.name}</Table.Cell>
      <Table.Cell>{props.numOfQuestions}</Table.Cell>
      <Table.Cell>{props.lastUpdated}</Table.Cell>
      <Table.Cell>
        <Container>
          <Button>Update</Button>
          <Popup
            on="click"
            hideOnScroll
            trigger={<Button onClick={copyUrl}>Copy Link</Button>}
          >
            Url copied!
          </Popup>
        </Container>
      </Table.Cell>
    </Table.Row>
  );
};

export default TestRow;
