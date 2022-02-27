import React, {useState, useEffect} from 'react';
import { Container, Header, Select } from 'semantic-ui-react';

const Reports = () => {

    useEffect(async () => {

    }, []);

    return(
    <Container textAlign="center">
      <Header as="h1">Reports</Header>
      <Select
        placeholder="Select by what to generate a report"
      />
    </Container>
    )
}

export default Reports