import React, {useState, useEffect} from 'react';
import { Container, Header } from 'semantic-ui-react';

const ReportsByStudents = () => {
  const [students, setStudents] = useState([]);
    
  useEffect(async () => {

  })

    return(
    <Container textAlign="center">
      <Header as="h1">Reports By Student</Header>
      <input type='text' onChange={e => setStudents(e.target.value)}/>
    </Container>
    )
}

export default ReportsByStudents