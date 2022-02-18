import React, { useEffect, useState } from 'react';
import { Container, Table } from 'semantic-ui-react';
import TestRow from './TestRow/TestRow';
import allTestsService from '../../services/allTestsService';

const TestManager = () => {
  const [tests, setTests] = useState([]);

  useEffect(async () => {
    var testsData = await allTestsService.getAllTests();
    testsData.data.map((test) => {
      setTests((prevState) => [...prevState, test]);
    });
  }, []);

  return (
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Number Of Questions</Table.HeaderCell>
          <Table.HeaderCell>Last Updated</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {tests.map((test) => {
          return (
            <TestRow
              id={test.id}
              name={test.name}
              numOfQuestions={test.questions.length}
              lastUpdated={test.lastUpdated}
            />
          );
        })}
        {console.log(tests)}
      </Table.Body>
    </Table>
  );
};

export default TestManager;
