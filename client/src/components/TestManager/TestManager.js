import React, { useEffect, useState } from 'react';
import { Container, Table, Input, Header } from 'semantic-ui-react';
import TestRow from './TestRow/TestRow';
import allTestsService from '../../services/allTestsService';

const TestManager = () => {
  const [tests, setTests] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(async () => {
    setTests([]);
    const urlParams = new URLSearchParams(window.location.search);
    const field = urlParams.get('field');
    var testsData = await allTestsService.getAllTests(field);
    testsData.data.map((test) => {
      setTests((prevState) => [...prevState, test]);
    });
    if (search !== '') {
      setTests([]);
      testsData.data.map((test) => {
        if (test.name.includes(search)) {
          setTests((prevState) => [...prevState, test]);
        }
      });
    }
  }, [search]);

  return (
    <div>
      <Header textAlign="left" as="h1">
        Test Managet:
      </Header>
      <Input
        icon="search"
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search for test by name:"
      />
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
                testUrl={test.testUrl}
                name={test.name}
                numOfQuestions={test.questions.length}
                lastUpdated={test.lastUpdated}
              />
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TestManager;
