import { Table } from 'semantic-ui-react';

const QuestionRow = (props) => {

  return (
    <Table.Row>
      <Table.Cell>{props.questionType}</Table.Cell>
      <Table.Cell>{props.title}</Table.Cell>
      <Table.Cell>{props.content}</Table.Cell>
      <Table.Cell>{props.answers}</Table.Cell>
      <Table.Cell>{props.viewAnswers}</Table.Cell>
      <Table.Cell>{props.tags}</Table.Cell>
      <Table.Cell>{props.points}</Table.Cell>
    </Table.Row>
  );
};

export default QuestionRow;
