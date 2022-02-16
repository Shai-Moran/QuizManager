import React ,{ useState, useEffect } from "react";
import "./NewQuestionForm.css"
import { Header, Form } from "semantic-ui-react";
import Answer from "../Answer/Answer";

const NewQuestionForm = (props) => {
  const questionType = [
    { key: 'SingleChoiceQuestion', value: 'SingleChoiceQuestion', text: 'SingleChoiceQuestion' },
    { key: 'MultipleSelectionQuestion', value: 'MultipleSelectionQuestion', text: 'MultipleSelectionQuestion' }
  ];

  const [answerCounter, setAnswerCounter] = useState([1, 2, 3, 4]);
  
  useEffect(() => {
    props.setAnswers('AAA')
  }, []) 
  return (
    <Form>
      <Header textAlign="left">
        Question Type:
        <Form.Select
          selection
          placeholder="Select a question Type"
          options={questionType}
          onChange={(e) => props.setQuestionType(e.target.innerText)}
        />
      </Header>
      <Header textAlign="left">
        Title:
        <Form.Input
          fluid
          placeholder="Title"
          onChange={(e) => props.setTitle(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Content:
        <Form.Input      
          placeholder="Content"
          onChange={(e) => props.setContent(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Points:
        <Form.Input         
          type="Number"
          onChange={(e) => props.setPoints(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Answers:
        {answerCounter.map((index) => {
          return (<Answer
          id = {index}
          setData = {props.setAnswers()}
          data = {props.answers}
          />)
        })}
        <button onClick={() => console.log(props.answers)}>Test</button>
      </Header>
    </Form>
    );
  };

export default NewQuestionForm;