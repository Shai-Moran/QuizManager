import React ,{useState} from 'react';
import { Button, Table, TableCell } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const QuestionRow = (props) => {
  const navigation = useNavigate();

  const onUpdateHandler = () => {
    navigation(`/update-question?id=${props.id}`);
  };

  return (
    <Table.Row>
      <Table.Cell>{props.questionType}</Table.Cell>
      <Table.Cell>{props.title}</Table.Cell>
      <Table.Cell>{props.content}</Table.Cell>
      <Table.Cell>{props.answers}</Table.Cell>
      <Table.Cell>{props.viewAnswers}</Table.Cell>
      <Table.Cell>{props.tags}</Table.Cell>
      <Table.Cell>{props.points}</Table.Cell>
      <Table.Cell>{props.lastUpdated}</Table.Cell>
      <TableCell>
        <Button onClick={onUpdateHandler}>Edit</Button>
        <Button>Delete</Button>
      </TableCell>
    </Table.Row>
  );
};

export default QuestionRow;
