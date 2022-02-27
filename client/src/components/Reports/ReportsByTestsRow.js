import React from "react";
import { Button, Table, TableCell } from 'semantic-ui-react';

const ReportsByTestsRow = (props) => {
    <Table.Row>
      <Table.Cell>{props.name}</Table.Cell>
      <Table.Cell>{props.date}</Table.Cell>
      <Table.Cell>{props.questionSubmitted}</Table.Cell>
      <Table.Cell>{props.grade}</Table.Cell>
    </Table.Row>
}

export default ReportsByTestsRow