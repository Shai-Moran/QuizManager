import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Table, Popup } from 'semantic-ui-react';

const TestRow = (props) => {
  const navigation = useNavigate();

  const copyUrl = () => {
    navigator.clipboard.writeText(props.testUrl);
  };

  const onUpdateHandler = () => {
    navigation(`/update-test?id=${props.id}`);
  };

  return (
    <Table.Row>
      <Table.Cell>{props.name}</Table.Cell>
      <Table.Cell>{props.numOfQuestions}</Table.Cell>
      <Table.Cell>{props.lastUpdated}</Table.Cell>
      <Table.Cell>
        <Container>
          <Button onClick={onUpdateHandler}>Update</Button>
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
