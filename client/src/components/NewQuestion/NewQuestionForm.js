import React ,{ useState, useEffect } from "react";
import "./NewQuestionForm.css"
import { Header, Form } from "semantic-ui-react";
import Answer from "../Answer/Answer1";
import Answer2 from "../Answer/Answer2";
import Answer3 from "../Answer/Answer3";
import Answer4 from "../Answer/Answer4";

const NewQuestionForm = (props) => {
  const questionType = [
    { key: 'SingleChoiceQuestion', value: 'SingleChoiceQuestion', text: 'SingleChoiceQuestion' },
    { key: 'MultipleSelectionQuestion', value: 'MultipleSelectionQuestion', text: 'MultipleSelectionQuestion' }
  ];

  //const [answerCounter, setAnswerCounter] = useState([1, 2, 3, 4]);
  
  useEffect(() => {
    props.setAnswer1('')
    props.setAnswer2('')
    props.setAnswer3('')
    props.setAnswer4('')
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
        {/* {answerCounter.map((index) => {
          return (<Answer
          id = {index}
          setData = {props.setAnswer1()}
          data = {props.answer1}
          />)
        })} */}
        <Answer
          id = {1}
          setData = {props.setAnswer1()}
          data = {props.answer1}
          />
          <Answer2
          id = {2}
          setData = {props.setAnswer2()}
          data = {props.answer2}
          />
          <Answer3
          id = {3}
          setData = {props.setAnswer3()}
          data = {props.answer3}
          />
          <Answer4
          id = {4}
          setData = {props.setAnswer4()}
          data = {props.answer4}
          />
        <button onClick={() => console.log(props.answer1)}>Test</button>
      </Header>
    </Form>
    );
  };

export default NewQuestionForm;