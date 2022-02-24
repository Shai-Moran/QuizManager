import React ,{useState} from 'react';
import { Button, Table, TableCell } from 'semantic-ui-react';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

const QuestionRow = (props) => {

/*   const handleClickEditRow = (rowIndex) => {
    setTableData(prev => prev.map((r, index) => ({...r, isEditing: rowIndex === index})))
  } */
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
        <Button>Edit</Button>
        <Button>Delete</Button>
      </TableCell>
    </Table.Row>
  );
};

export default QuestionRow;
