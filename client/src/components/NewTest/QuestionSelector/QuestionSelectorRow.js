import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  List,
  Popup,
  Table
} from 'semantic-ui-react';

const QuestionSelectorRow = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    props.questions.map((q) => {
      if (q === props.id) setIsSelected(true);
    });
  }, [props.tags]);

  const onClickHandler = () => {
    setIsSelected(!isSelected);
    let tempState = [...props.questions];
    if (!isSelected) {
      props.setQuestions((prevState) => [...prevState, props.id]);
      props.setNumSelected(props.numSelected + 1);
    } else {
      props.questions.map((q) => {
        if (props.id === q) {
          let index = props.questions.indexOf(props.id);
          tempState.splice(index, 1);
          props.setQuestions(tempState);
        }
        props.setNumSelected(props.numSelected - 1);
      });
    }
  };

  return (
    <Table.Row>
      <Table.Cell positive={isSelected} onClick={onClickHandler}>
        <div>
          <Header as="h5" textAlign="left">
            {props.name}
          </Header>
          <List horizontal>
            {props.tags.map((tag) => {
              return <List.Item as="a">{tag}</List.Item>;
            })}
          </List>
        </div>
      </Table.Cell>
      <Table.Cell>
        <Popup trigger={<Button>View</Button>}>
          <Grid>
            <Grid.Row>
              <Container>
                <Header as="h1">{props.name}</Header>
              </Container>
            </Grid.Row>
            <Grid.Row>
              <Container>
                <Header as="h3">{props.contant}</Header>
              </Container>
            </Grid.Row>
            <Grid.Row>
              <Container>
                {props.answers.map((a) => {
                  if (a.isTrue)
                    return (
                      <Header color="green" as="h4">
                        {a.content}
                      </Header>
                    );
                  else
                    return (
                      <Header color="red" as="h4">
                        {a.content}
                      </Header>
                    );
                })}
              </Container>
            </Grid.Row>
          </Grid>
        </Popup>
      </Table.Cell>
    </Table.Row>
  );
};

export default QuestionSelectorRow;
