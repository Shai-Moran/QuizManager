import React, {useState, useEffect} from 'react';
import { Container, Header, Select, Table } from 'semantic-ui-react';
import allTestsService from '../../services/allTestsService';
import ReportsByTestsRow from './ReportsByTestsRow';

const ReportsByTests = () => {
  const [tests, setTests] = useState([]);
    
  useEffect(async () => {
    const allTests = await allTestsService.getAllTests()
    allTests.data.map((test) => {
      setTests((prevState) => [...prevState, test])
    })
   });

    return(
    <Container textAlign="center">
      <Header as="h1">Reports By Test</Header>
      <Select
      placeholder='select test'
      />
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Student Name</Table.HeaderCell>
            <Table.HeaderCell>Date sent</Table.HeaderCell>
            <Table.HeaderCell>Several questions submitted</Table.HeaderCell>
            <Table.HeaderCell>Grade</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tests.map((test) => {
            return (
              <ReportsByTestsRow
                name={test.name}
                date={test.date}
                questionSubmitted={test.questionSubmitted}
                grade={test.grade}
              />
            );
          })}
        </Table.Body>
      </Table>
  </Container>
    )
}

export default ReportsByTests