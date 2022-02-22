import { Table } from 'semantic-ui-react';

const QuestionRow = () => {
  return (
    <Table.Row>
      <Table.Cell>{this.props.questionType}</Table.Cell>
      <Table.Cell>{this.props.title}</Table.Cell>
      <Table.Cell>{this.props.content}</Table.Cell>
      <Table.Cell>{this.props.answers}</Table.Cell>
      <Table.Cell>{this.props.viewAnswers}</Table.Cell>
      <Table.Cell>{this.props.tags}</Table.Cell>
      <Table.Cell>{this.props.points}</Table.Cell>
    </Table.Row>
  );
};

export default QuestionRow;
