import React ,{ useState, useEffect } from "react";
import "./NewQuestionForm.css"
import { Header, Form } from "semantic-ui-react";
import Answer from "../Answer/Answer1";
import Answer2 from "../Answer/Answer2";
import Answer3 from "../Answer/Answer3";
import Answer4 from "../Answer/Answer4";
import questionService from "../../services/questionService";

const NewQuestionForm = (props) => {
 
  const questionType = [
    { key: 'SingleChoiceQuestion', value: 'SingleChoiceQuestion', text: 'SingleChoiceQuestion' },
    { key: 'MultipleSelectionQuestion', value: 'MultipleSelectionQuestion', text: 'MultipleSelectionQuestion' }
  ];
  
  useEffect(async () => {
    var fieldsData = await questionService.getAllQuestions();
    fieldsData.data.map((f) => {
      
    })
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
      </Header>
    </Form>
    );
  };

export default NewQuestionForm;